import DashboardLayout from "@/components/DashboardLayout";
import DashboardCards from "@/components/dashboard/cards";
import RevenueChart from "@/components/dashboard/revenue-chart";
import LatestInvoices from "@/components/dashboard/latest-invoices";
import RecentActivity from "@/components/RecentActivity";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCards />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="lg:col-span-5">
            <RevenueChart />
        </div>
        <div className="lg:col-span-3">
            <LatestInvoices />
        </div>
      </div>
      <div className="mt-6">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}
