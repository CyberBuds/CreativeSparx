'use client'

import { useState } from 'react'
import Link from 'next/link';

export default function CompanyDetailsPage() {
  const [companyName, setCompanyName] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/onboarding/company-details', {
      method: 'POST',
      body: JSON.stringify({ companyName, website }),
    })

    if (response.ok) {
      // Navigate to the next step
      window.location.href = '/onboarding/branding'
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Company Details</h2>
      <p className="mt-2 text-center text-gray-600">Tell us a bit about your company.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="relative">
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
          />
          <label
            htmlFor="companyName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Company Name
          </label>
        </div>
        <div className="relative">
          <input
            id="website"
            name="website"
            type="url"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://example.com"
          />
          <label
            htmlFor="website"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Website (Optional)
          </label>
        </div>
        <div className="flex justify-end">
            <Link href="/onboarding/branding">
                <a className="w-full flex justify-center py-3 mt-8 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue</a>
            </Link>
        </div>
      </form>
    </div>
  )
}
