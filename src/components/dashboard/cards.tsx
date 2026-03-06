import { CreditCardIcon, UsersIcon, CubeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { fetchCardData } from '@/lib/data';

const iconMap = {
  collected: CreditCardIcon,
  customers: UsersIcon,
  pending: ClockIcon,
  invoices: CubeIcon,
};

async function Card({ 
    title, 
    value, 
    type 
}: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    const Icon = iconMap[type];
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
                <div className={`p-3 bg-gray-200 rounded-full`}>
                    {Icon ? <Icon className="w-6 h-6 text-gray-700" /> : null}
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    );
}

export default async function DashboardCards() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
        />
    </>
  );
}
