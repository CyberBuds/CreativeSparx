'use client'

import Link from 'next/link';

export default function DemoPage() {
  return (
    <div>
      <p className="text-lg mb-4">
        This is a demo page. You can replace this with your own content.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
