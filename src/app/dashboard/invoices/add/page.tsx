import { getClients } from '../../../../lib/clients';
import { AddInvoiceForm } from './form';

export default async function AddInvoicePage() {
  const clients = await getClients();

  return (
    <div>
      <h1 className="text-2xl font-bold">Add Invoice</h1>
      <AddInvoiceForm clients={clients} />
    </div>
  );
}
