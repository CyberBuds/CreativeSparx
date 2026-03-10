
import Link from 'next/link';

export default function MarketingFooter() {
  return (
    <footer className="bg-background py-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <div>
                    <h3 className="text-h4 font-bold text-transparent bg-clip-text bg-primary-gradient mb-4">CreativeSparx</h3>
                    <p className="text-text-muted">The ultimate toolkit for modern freelancers.</p>
                </div>
                 <div>
                    <h4 className="text-h4 text-text-primary mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="text-text-secondary hover:text-text-primary">About</Link></li>
                        <li><Link href="/blog" className="text-text-secondary hover:text-text-primary">Blog</Link></li>
                        <li><Link href="/contact" className="text-text-secondary hover:text-text-primary">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-h4 text-text-primary mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/privacy-policy" className="text-text-secondary hover:text-text-primary">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-service" className="text-text-secondary hover:text-text-primary">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-h4 text-text-primary mb-4">Connect</h4>
                     <p className="text-text-muted">team@creativesparx.io</p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border-color text-center text-text-muted">
                <p>&copy; 2024 CreativeSparx. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
