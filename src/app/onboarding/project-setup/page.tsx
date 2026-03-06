'use client'

import { useState } from 'react'

export default function ProjectSetupPage() {
  const [projectName, setProjectName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/onboarding/project-setup', {
      method: 'POST',
      body: JSON.stringify({ projectName }),
    })

    if (response.ok) {
      // Navigate to the dashboard
      window.location.href = '/dashboard'
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Create Your First Project</h2>
      <p className="mt-2 text-center text-gray-600">Let&apos;s start by creating a project to organize your work.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="relative">
          <input
            id="projectName"
            name="projectName"
            type="text"
            required
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
          <label
            htmlFor="projectName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Project Name
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-8 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Finish
        </button>
      </form>
    </div>
  )
}
