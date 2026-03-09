import DemoBanner from '@/components/DemoBanner';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardTopBar from '@/components/DashboardTopBar';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-10">
      <aside className="w-full flex-none md:w-64">
      <DemoBanner />
        <DashboardSidebar isDemo={true}/>
      </aside>
      <div className="flex flex-col flex-grow">
         
                     <DashboardTopBar />
               
        <main className="flex-grow p-4 md:p-8 mt-16">
          
       
          {children}
        </main>
      </div>
    </div>
  );
}
