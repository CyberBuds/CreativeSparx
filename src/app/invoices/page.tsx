import DashboardLayout from "../../components/DashboardLayout";
import InvoiceTable from '../../components/InvoiceTable';

export default function InvoicesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <InvoiceTable />
    </DashboardLayout>
  );
}