'use client'

import { useAuth } from '../context/AuthContext';
import { auth } from '../lib/firebase';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import DashboardSidebar from './DashboardSidebar'; // Import the sidebar component

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Toaster />
      <DashboardSidebar /> {/* Add the sidebar component */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <div className="flex items-center justify-end flex-1 px-4">
            <div className="flex items-center ml-4 md:ml-6">
                <p className="mr-4">Welcome, {user?.email}</p>
                <button
                    onClick={() => auth.signOut()}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign Out
                </button>
            </div>
          </div>
        </div>
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
