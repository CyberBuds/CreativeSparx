import { getClients } from '@/lib/clients';
import CreateInvoiceForm from '@/components/CreateInvoiceForm';

export default async function AddInvoicePage() {
  const clients = await getClients();

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Invoice</h1>
      <CreateInvoiceForm clients={clients} />
    </div>
  );
}
