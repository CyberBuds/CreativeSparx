'use client'

import { usePathname } from 'next/navigation';

export default function OnboardingWizardLayout({ children }: { children: React.ReactNode }) {
  const steps = [
    { name: 'Welcome', href: '/onboarding' },
    { name: 'Company Details', href: '/onboarding/company-details' },
    { name: 'Branding', href: '/onboarding/branding' },
    { name: 'Project Setup', href: '/onboarding/project-setup' },
  ];

  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <nav aria-label="Progress">
            <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
              {steps.map((step, stepIdx) => (
                <li key={step.name} className="relative md:flex-1 md:flex">
                  <a href="#" className={`group flex items-center w-full ${pathname === step.href ? '' : 'cursor-default'}`}>
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full ${pathname.includes(step.href) ? 'bg-indigo-600' : 'border-2 border-gray-300'}`}>
                        {pathname.includes(step.href) ? (
                          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-gray-500">{`0${stepIdx + 1}`}</span>
                        )}
                      </span>
                      <span className={`ml-4 text-sm font-medium ${pathname.includes(step.href) ? 'text-indigo-600' : 'text-gray-500'}`}>{step.name}</span>
                    </span>
                  </a>
                  {stepIdx !== steps.length - 1 ? (
                    <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                      <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                        <path d="M0.5 0V30L10.5 40L0.5 50V80" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
