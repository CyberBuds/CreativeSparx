import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          CreativeSparx
        </Link>
      </header>
      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-h1 mb-4">Contact Us</h1>
        <p className="text-body max-w-2xl mx-auto">
          This is a fictional application, so there is no real contact information. However, you can see how a contact page could be structured in a Next.js application.
        </p>
      </main>
    </div>
  );
}
