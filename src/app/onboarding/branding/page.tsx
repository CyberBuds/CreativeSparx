'use client'

import { useState } from 'react'
import Link from 'next/link';

export default function BrandingPage() {
  const [logo, setLogo] = useState<File | null>(null);
  const [primaryColor, setPrimaryColor] = useState('#4f46e5');

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (logo) {
      formData.append('logo', logo);
    }
    formData.append('primaryColor', primaryColor);

    const response = await fetch('/onboarding/branding', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Navigate to the next step
      window.location.href = '/onboarding/project-setup';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Branding</h2>
      <p className="mt-2 text-center text-gray-600">Customize the look and feel of your dashboard.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Company Logo</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="logo" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="logo" name="logo" type="file" className="sr-only" onChange={handleLogoChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700">Primary Color</label>
          <input
            id="primary-color"
            name="primary-color"
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="mt-1 h-10 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
            <Link href="/onboarding/project-setup">
                <a className="w-full flex justify-center py-3 mt-8 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue</a>
            </Link>
        </div>
      </form>
    </div>
  );
}
