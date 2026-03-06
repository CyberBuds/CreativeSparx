'use client'

import Link from 'next/link';
import { FiBox, FiDollarSign, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function LandingPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-h3 font-bold text-transparent bg-clip-text bg-primary-gradient">
            CreativeSparx
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-text-secondary hover:text-text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-text-secondary hover:text-text-primary transition-colors">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center bg-primary-gradient">
          <div className="container mx-auto px-6">
            <h2 className="text-h1 text-white mb-4">
              Stop Chasing Payments.
              <br />
              Start Getting Paid.
            </h2>
            <p className="text-body text-white/80 mb-8 max-w-2xl mx-auto">
              Create invoices. Manage clients. Accept crypto. All in one place for modern freelancers.
            </p>
            <Link href="/signup" className="btn-secondary bg-white text-brand-primary-from hover:bg-white/90">
              Start for Free
            </Link>
          </div>
        </section>

        {/* Crypto Trust Section */}
        <section className="py-16">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center space-x-3">
                    <FiDollarSign className="text-yellow-400 h-8 w-8"/>
                    <h3 className="text-h3 text-text-secondary">Crypto-Friendly Payments</h3>
                </div>
                <p className="text-text-muted mt-2">
                    Easily accept USDT for lower fees and faster transactions.
                </p>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h3 className="text-h2 text-center mb-12">
              Finally, Invoicing That Works for You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-card p-8 rounded-xl shadow-soft">
                <FiBox className="h-10 w-10 text-brand-primary-from mb-4" />
                <h4 className="text-h3 mb-2">Effortless Invoicing</h4>
                <p className="text-text-secondary">
                  Create and send professional invoices in seconds. No more clunky spreadsheets or Word documents.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-card p-8 rounded-xl shadow-soft">
                <FiUsers className="h-10 w-10 text-brand-primary-from mb-4" />
                <h4 className="text-h3 mb-2">Client Management</h4>
                <p className="text-text-secondary">
                  Keep all your client information in one place. Track projects, and communication history with ease.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-card p-8 rounded-xl shadow-soft">
                <FiTrendingUp className="h-10 w-10 text-brand-primary-from mb-4" />
                <h4 className="text-h3 mb-2">Business Insights</h4>
                <p className="text-text-secondary">
                  Gain valuable insights into your business with our dashboard and reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <h3 className="text-h2 text-center mb-12">What Our Users Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-lg">
                        <p className="text-text-secondary mb-4">&ldquo;CreativeSparx has been a game-changer for my freelance business. I can finally accept crypto payments from my international clients without any hassle.&rdquo;</p>
                        <p className="font-bold text-text-primary">- Sarah, Freelance Designer</p>
                    </div>
                     <div className="p-6 rounded-lg">
                        <p className="text-text-secondary mb-4">&ldquo;I love how simple and intuitive CreativeSparx is. I created my first invoice in less than 5 minutes!&rdquo;</p>
                        <p className="font-bold text-text-primary">- John, Web Developer</p>
                    </div>
                     <div className="p-6 rounded-lg">
                        <p className="text-text-secondary mb-4">&ldquo;The client management features are a lifesaver. I can finally keep track of all my projects and deadlines in one place.&rdquo;</p>
                        <p className="font-bold text-text-primary">- Emily, Content Writer</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h3 className="text-h2 text-center mb-12">
              Simple, Transparent Pricing
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Free Plan */}
              <div className="bg-card p-8 rounded-xl shadow-soft w-full max-w-md border border-border-color">
                <h4 className="text-h3 mb-4">Free</h4>
                <p className="text-5xl font-bold mb-4">$0<span className="text-lg text-text-muted">/month</span></p>
                <ul className="space-y-4 text-left text-text-secondary mb-8">
                  <li>5 Invoices per month</li>
                  <li>10 Clients</li>
                  <li>Basic Support</li>
                </ul>
                <Link href="/signup" className="btn-secondary w-full text-center block">
                  Choose Free
                </Link>
              </div>
              {/* Pro Plan */}
              <div className="bg-card p-8 rounded-xl shadow-glow w-full max-w-md relative border-2 border-brand-primary-to">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                    </span>
                </div>
                <h4 className="text-h3 mb-4">Pro</h4>
                <p className="text-5xl font-bold mb-4">$9<span className="text-lg text-text-muted">/month</span></p>
                 <p className="text-text-muted mb-8">Billed as 9 USDT per month</p>
                <ul className="space-y-4 text-left text-text-secondary mb-8">
                  <li>Unlimited Invoices</li>
                  <li>Unlimited Clients</li>
                  <li>Accept Crypto Payments</li>
                  <li>Priority Support</li>
                </ul>
                <Link href="/signup" className="btn-primary w-full text-center block">
                  Choose Pro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <h3 className="text-h2 text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h4 className="text-h3 mb-2">How do I get paid in crypto?</h4>
                <p className="text-text-secondary">
                  You can connect your crypto wallet to CreativeSparx and your clients can pay you directly in USDT.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-h3 mb-2">Is it secure?</h4>
                <p className="text-text-secondary">
                  Yes, we use the latest security measures to protect your data and transactions.
                </p>
              </div>
              <div>
                <h4 className="text-h3 mb-2">Can I cancel my subscription?</h4>
                <p className="text-text-secondary">
                  Yes, you can cancel your subscription at any time. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-gradient text-center">
            <div className="container mx-auto px-6">
                <h3 className="text-h2 text-white mb-4">Ready to Get Started?</h3>
                <p className="text-body text-white/80 mb-8 max-w-2xl mx-auto">
                    Join hundreds of freelancers who are already using CreativeSparx to streamline their business.
                </p>
                <Link href="/signup" className="btn-secondary bg-white text-brand-primary-from hover:bg-white/90">
                    Create Your Free Account
                </Link>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="container mx-auto px-6 text-center text-text-muted">
          <p>&copy; 2024 CreativeSparx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
