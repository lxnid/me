'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to console
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-6xl font-bold mb-4">Critical Error</h1>
            <h2 className="text-2xl mb-4">Something went wrong</h2>
            <p className="text-neutral-400 mb-8">
              We encountered a critical error. Please refresh the page or contact support if the issue persists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-300">
                  Error details (dev only)
                </summary>
                <pre className="mt-4 p-4 bg-neutral-900 rounded text-xs overflow-auto max-h-64">
                  {error.message}
                  {error.stack && `\n\n${error.stack}`}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
