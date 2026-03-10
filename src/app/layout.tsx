
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from '@/components/ThemeProvider';
import AppContent from '@/components/AppContent';
import { Plus_Jakarta_Sans} from 'next/font/google';
import { Suspense } from 'react';
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", GeistSans.variable, jakarta.variable)} suppressHydrationWarning>
      <body className="bg-background text-text-primary">
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>
              <AppContent>{children}</AppContent>
            </AuthProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
