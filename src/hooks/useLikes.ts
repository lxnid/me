import { useState, useEffect, useCallback, useRef } from 'react';
import {
  initFirebase,
  getDb,
  getDeviceFingerprint,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from '../lib/firebase';

interface UseLikesReturn {
  likeCount: number;
  hasLiked: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  toggleLike: () => Promise<void>;
}

const LIKE_STORAGE_KEY = 'blog-likes';
const RATE_LIMIT_MS = 1000; // 1 second between likes

/**
 * Hook for managing blog post likes
 * Uses Firebase Firestore for persistence and localStorage for user state
 */
export function useLikes(postSlug: string): UseLikesReturn {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const lastLikeTimeRef = useRef(0);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Check if Firebase is available
  const firebaseAvailable = useRef(false);

  useEffect(() => {
    // Initialize and check localStorage for liked state
    const likedPosts = JSON.parse(localStorage.getItem(LIKE_STORAGE_KEY) || '{}');
    setHasLiked(!!likedPosts[postSlug]);

    // Try to initialize Firebase
    const firebase = initFirebase();
    if (!firebase) {
      setIsLoading(false);
      setIsDisabled(true);
      return;
    }

    firebaseAvailable.current = true;
    const db = firebase.db;

    // Set up real-time listener for like count
    const postRef = doc(db, 'blog-likes', postSlug);

    unsubscribeRef.current = onSnapshot(
      postRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setLikeCount(docSnap.data().count || 0);
        } else {
          setLikeCount(0);
        }
        setIsLoading(false);
      },
      (error) => {
        console.error('Error listening to likes:', error);
        setIsLoading(false);
        setIsDisabled(true);
      }
    );

    // Cleanup listener on unmount
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [postSlug]);

  const toggleLike = useCallback(async () => {
    // Rate limiting
    const now = Date.now();
    if (now - lastLikeTimeRef.current < RATE_LIMIT_MS) {
      return;
    }
    lastLikeTimeRef.current = now;

    // Check if Firebase is available
    const db = getDb();
    if (!db) {
      console.warn('Firebase not available');
      return;
    }

    const postRef = doc(db, 'blog-likes', postSlug);
    const likedPosts = JSON.parse(localStorage.getItem(LIKE_STORAGE_KEY) || '{}');

    try {
      const fingerprint = await getDeviceFingerprint();
      const docSnap = await getDoc(postRef);

      if (hasLiked) {
        // Unlike
        if (docSnap.exists()) {
          const currentCount = docSnap.data().count || 0;
          if (currentCount > 0) {
            await updateDoc(postRef, {
              count: increment(-1),
            });
          }
        }
        delete likedPosts[postSlug];
        setHasLiked(false);
      } else {
        // Like
        if (docSnap.exists()) {
          // Check if already liked by this fingerprint (anti-spam)
          const data = docSnap.data();
          if (data.fingerprints?.[fingerprint]) {
            // Already liked by this device, update local state
            likedPosts[postSlug] = true;
            setHasLiked(true);
            localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify(likedPosts));
            return;
          }

          await updateDoc(postRef, {
            count: increment(1),
            [`fingerprints.${fingerprint}`]: true,
          });
        } else {
          // Create new document
          await setDoc(postRef, {
            count: 1,
            fingerprints: { [fingerprint]: true },
          });
        }
        likedPosts[postSlug] = true;
        setHasLiked(true);
      }

      localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify(likedPosts));
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  }, [postSlug, hasLiked]);

  return {
    likeCount,
    hasLiked,
    isLoading,
    isDisabled,
    toggleLike,
  };
}
