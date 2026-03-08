'use client';

import { AuthProvider } from '@/context/AuthContext';
import AppContent from '@/components/AppContent';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Don't apply auth-specific layout to marketing pages
  if (pathname === '/' || pathname === '/about' || pathname === '/contact') {
    return <>{children}</>;
  }

  return (
    <AuthProvider>
      <AppContent>
        {children}
      </AppContent>
    </AuthProvider>
  );
}