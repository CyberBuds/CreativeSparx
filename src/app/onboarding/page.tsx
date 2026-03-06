'use client'

import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to CreativeSparx!</h1>
      <p className="mt-4 text-lg text-gray-600">We&apos;re excited to have you on board. Let&apos;s get your account set up in just a few simple steps.</p>
      <div className="mt-8">
        <Link href="/onboarding/company-details">
          <a className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Get Started</a>
        </Link>
      </div>
    </div>
  );
}
