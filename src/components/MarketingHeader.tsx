
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';


export default function MarketingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-h3 font-bold text-transparent bg-clip-text bg-primary-gradient">
            CreativeSparx
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-text-secondary hover:text-text-primary transition-colors">
              Blog
            </Link>
            <Link href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-text-secondary hover:text-text-primary transition-colors">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Get Started
            </Link>
        </div>
        <div className="md:hidden">
            <button className="text-text-primary">
                <FiMenu className="h-6 w-6" />
            </button>
        </div>
      </div>
    </header>
  );
}
