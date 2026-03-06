'use client'

import { usePathname } from 'next/navigation';
import DashboardSidebar from './DashboardSidebar';
import DashboardTopBar from './DashboardTopBar';
import DemoBanner from './DemoBanner';

export default function AppContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noDashboardRoutes = ['/', '/pricing', '/login', '/signup'];
  const isDashboard = !noDashboardRoutes.includes(pathname);

  return (
    <>
      {isDashboard ? (
        <div className="flex min-h-screen pt-10"> {/* Added pt-10 for banner */}
          <DemoBanner />
          <DashboardSidebar />
          <div className="flex flex-col flex-1">
            <header className="h-16 flex items-center border-b border-border-color">
              <DashboardTopBar />
            </header>
            <main className="flex-1 p-6 md:p-8">
              {children}
            </main>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
