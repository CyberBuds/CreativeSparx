'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiFileText, FiUsers, FiSettings, FiCreditCard } from 'react-icons/fi';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FiFileText },
  { name: 'Clients', href: '/dashboard/clients', icon: FiUsers },
  { name: 'Subscription', href: '/dashboard/subscription', icon: FiCreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-background">
          {/* Placeholder for Logo */}
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-primary-gradient">CreativeSparx</h1>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${pathname === item.href 
                    ? 'text-white bg-primary-gradient' 
                    : 'text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
