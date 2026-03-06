'use client'

import { useState } from 'react'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: [
        'Up to 3 Invoices per month',
        'Up to 5 Clients',
        'Basic Reporting',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: isYearly ? 7.20 : 9,
      features: [
        'Unlimited Invoices',
        'Unlimited Clients',
        'Accept Crypto Payments',
        'Advanced Reporting',
        'Priority Support',
      ],
      cta: 'Choose Pro',
      popular: true,
    },
    {
      name: 'Business',
      price: isYearly ? 23.20 : 29,
      features: [
        'All Pro features',
        'Multi-user access',
        'Team collaboration tools',
        'Dedicated account manager',
      ],
      cta: 'Choose Business',
    },
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-lg shadow-lg ${plan.popular ? 'bg-indigo-700' : 'bg-gray-800'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-4 mr-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-5xl font-bold mb-4">${plan.price}<span className="text-lg">/month</span></p>
              <p className="text-gray-400 mb-8">{plan.name === 'Pro' ? (isYearly ? 'Billed as $86.40 per year' : 'Billed monthly') : ''}</p>
              <ul className="space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/signup" className={`mt-8 block w-full text-center px-8 py-4 rounded-md text-lg font-semibold ${plan.popular ? 'bg-white text-indigo-700' : 'bg-gray-700'}`}>{plan.cta}</a>
            </div>
          ))}
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
            <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">Is my data secure?</h4>
                <p className="text-gray-400">We take data security very seriously. All your data is encrypted and stored securely on our servers. We also offer two-factor authentication for added security.</p>
            </div>
            <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">Do you offer integrations with other services?</h4>
                <p className="text-gray-400">Yes, we offer integrations with a variety of popular services, including accounting software, project management tools, and payment gateways. You can find a full list of our integrations on our website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
