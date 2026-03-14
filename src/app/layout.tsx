
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from '@/components/ThemeProvider';
import AppContent from '@/components/AppContent';
import { Plus_Jakarta_Sans} from 'next/font/google';
import { Suspense } from 'react';
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata = {
  title: {
    default: "Creative Sparx | Stop Chasing Payments. Start Getting Paid.",
    template: "%s | Creative Sparx",
  },

  description:
    "Creative Sparx helps freelancers and businesses create invoices, manage clients, and accept crypto payments seamlessly. Stop chasing payments and start getting paid with an all-in-one modern platform.",

  keywords: [
    "Creative Sparx",
    "invoice software",
    "freelancer invoicing",
    "crypto payments",
    "accept crypto payments",
    "invoice generator",
    "client management tool",
    "freelancer tools",
    "SaaS billing platform",
    "get paid online",
    "crypto invoicing platform",
  ],

  openGraph: {
    title: "Creative Sparx",
    description:
      "Create invoices. Manage clients. Accept crypto. All in one place.",
    images: ["/og-image.png"],
  },
};
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
           {children}
            </AuthProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
