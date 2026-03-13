

export default function SubscriptionPage() {
  const plans = [
    {
      name: 'Freelancer',
      price: 'Free',
      features: [
        '5 Projects',
        '10 GB Storage',
        'Basic Analytics',
        'Email Support',
      ],
      cta: 'Current Plan',
      current: true,
    },
    {
      name: 'Studio',
      price: '$49/mo',
      features: [
        'Unlimited Projects',
        '100 GB Storage',
        'Advanced Analytics',
        'Priority Email Support',
        'Team Collaboration (up to 5 users)',
      ],
      cta: 'Upgrade',
      current: false,
    },
    {
      name: 'Agency',
      price: '$99/mo',
      features: [
        'Unlimited Projects',
        '1 TB Storage',
        'Advanced Analytics & Reporting',
        '24/7 Phone & Email Support',
        'Team Collaboration (unlimited users)',
        'Dedicated Account Manager',
      ],
      cta: 'Upgrade',
      current: false,
    },
  ];

  return (

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Subscription</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">Choose the plan that&apos;s right for your creative workflow.</p>
        </div>

        <div className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 bg-white dark:bg-gray-800 border rounded-2xl shadow-sm flex flex-col ${plan.current ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-700'}`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                {plan.current && (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Current</p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${plan.current ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-white text-indigo-500 border-indigo-500 hover:bg-indigo-50'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

  );
}
