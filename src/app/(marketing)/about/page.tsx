import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          CreativeSparx
        </Link>
      </header>
      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-h1 mb-4">About Us</h1>
        <p className="text-body max-w-2xl mx-auto">
          CreativeSparx is a fictional platform designed to showcase the power of AI in web development. This application was built and refactored by an AI assistant to demonstrate modern web application features and best practices.
        </p>
      </main>
    </div>
  );
}
