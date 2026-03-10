'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import DashboardSidebar from './DashboardSidebar';
import DashboardTopBar from './DashboardTopBar';
import DemoBanner from './DemoBanner';
import DashboardSkeleton from './DashboardSkeleton';

export default function AppContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();

  const noDashboardRoutes = ['/', '/pricing', '/login', '/signup'];
  const isDashboard = !noDashboardRoutes.includes(pathname);

  useEffect(() => {
    if (isDashboard && !loading && !user) {
      router.push('/login');
    }
  }, [isDashboard, user, loading, router]);

  if (isDashboard) {
    if (loading || !user) {
      return <DashboardSkeleton />;
    }

    return (
      <>
        <Toaster />
        <DemoBanner />
        <div className="flex h-screen bg-background pt-10">
          <DashboardSidebar />
          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <DashboardTopBar />
            <main className="relative flex-1 overflow-y-auto focus:outline-none">
              <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
