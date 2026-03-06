'use client'

import { useState } from 'react'

export default function OnboardingPage() {
  const [companyName, setCompanyName] = useState('')
  const [website, setWebsite] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/onboarding', {
      method: 'POST',
      body: JSON.stringify({ companyName, website }),
    })

    if (response.ok) {
      // Navigate to the dashboard
      window.location.href = '/dashboard'
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-8 py-10 bg-white rounded-lg shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-center">Welcome!</h1>
        <p className="mb-8 text-center text-gray-600">Let&apos;s get your company set up.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <button
            type="submit"
            className="w-full py-3 mt-8 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
