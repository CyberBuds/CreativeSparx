
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Suspense } from 'react';

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
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="bg-background text-text-primary">
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
