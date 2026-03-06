'use client'

import { useState } from 'react'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4">Choose Your Plan</h1>
        <p className="text-xl text-center text-gray-400 mb-12">Simple, transparent pricing for freelancers and businesses of all sizes.</p>

        <div className="flex justify-center items-center mb-12">
          <span className="mr-4">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={() => setIsYearly(!isYearly)} />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
          <span className="ml-4">Yearly (Save 20%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-5xl font-bold mb-4">$0</p>
            <p className="text-gray-400 mb-8">For freelancers just getting started.</p>
            <ul className="space-y-4 text-left">
              <li>Up to 3 Invoices per month</li>
              <li>Up to 5 Clients</li>
              <li>Basic Reporting</li>
            </ul>
            <a href="/signup" className="mt-8 block w-full text-center px-8 py-4 bg-gray-700 rounded-md text-lg font-semibold">Get Started</a>
          </div>

          <div className="bg-indigo-700 p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-0 -mt-4 mr-4">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-5xl font-bold mb-4">{isYearly ? '$7.20' : '$9'}<span className="text-lg">/month</span></p>
            <p className="text-gray-300 mb-8">Billed as {isYearly ? '86.4 USDT per year' : '9 USDT per month'}</p>
            <ul className="space-y-4 text-left">
              <li>Unlimited Invoices</li>
              <li>Unlimited Clients</li>
              <li>Accept Crypto Payments</li>
              <li>Advanced Reporting</li>
              <li>Priority Support</li>
            </ul>
            <a href="/signup" className="mt-8 block w-full text-center px-8 py-4 bg-white text-indigo-700 rounded-md text-lg font-semibold">Choose Pro</a>
          </div>
        </div>

        <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto text-left">
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">How do crypto payments work?</h4>
                <p className="text-gray-400">When you subscribe to the Pro plan, you will be prompted to connect your crypto wallet. Your monthly or yearly subscription fee will be automatically deducted from your wallet in USDT.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">Can I change my plan later?</h4>
                <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">What if I don&apos;t have a crypto wallet?</h4>
                <p className="text-gray-400">You will need to create a crypto wallet to subscribe to the Pro plan. We recommend using a popular wallet like MetaMask or Trust Wallet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
