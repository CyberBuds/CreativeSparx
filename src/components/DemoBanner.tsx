'use client'

import Link from 'next/link';

export default function DemoBanner() {
  // This would be controlled by some state, e.g., from a feature flag or auth status
  const isDemoMode = true;

  if (!isDemoMode) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-yellow-900 px-4 py-2 text-center text-sm">
      <span>You are in Demo Mode.</span>
      <Link href="/signup" className="ml-4 font-semibold underline hover:text-yellow-800">
        Create a Free Account
      </Link>
    </div>
  );
}
