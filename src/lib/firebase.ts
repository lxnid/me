import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
  deleteField,
  type Firestore,
} from 'firebase/firestore';

/**
 * Firebase Configuration
 * Uses environment variables for security
 * Ensure these are set in your .env file with PUBLIC_ prefix for Astro
 */
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

/**
 * Initialize Firebase (singleton pattern)
 * Returns null if config is missing (dev mode without Firebase)
 */
export function initFirebase(): { app: FirebaseApp; db: Firestore } | null {
  // Check if we have the required config
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn('Firebase config not found. Likes functionality will be disabled.');
    return null;
  }

  // Return existing instance if available
  if (app && db) {
    return { app, db };
  }

  // Initialize if not already done
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else {
    app = getApps()[0];
    db = getFirestore(app);
  }

  return { app, db };
}

/**
 * Get Firestore instance
 */
export function getDb(): Firestore | null {
  if (db) return db;
  const result = initFirebase();
  return result?.db || null;
}

/**
 * Generate a device fingerprint for anonymous rate limiting
 * This is a simple hash of browser characteristics
 */
export async function getDeviceFingerprint(): Promise<string> {
  if (typeof window === 'undefined') return 'server';

  const components = [
    navigator.userAgent,
    navigator.language,
    screen.width.toString(),
    screen.height.toString(),
    new Date().getTimezoneOffset().toString(),
    navigator.hardwareConcurrency?.toString() || '',
  ];

  // Create a simple hash
  const fingerprint = components.join('|');
  const encoder = new TextEncoder();
  const data = encoder.encode(fingerprint);

  // Use SubtleCrypto if available, otherwise fallback to simple hash
  if (window.crypto?.subtle) {
    try {
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    } catch {
      // Fallback for browsers without SubtleCrypto
    }
  }

  // Simple fallback hash
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

// Re-export Firestore functions for convenience
export { doc, getDoc, setDoc, updateDoc, increment, onSnapshot, deleteField };
