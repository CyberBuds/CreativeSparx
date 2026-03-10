
import MarketingHeader from '@/components/MarketingHeader';
import MarketingFooter from '@/components/MarketingFooter';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MarketingHeader />
      <main className="flex-grow pt-20">{children}</main>
      <MarketingFooter />
    </div>
  );
}
