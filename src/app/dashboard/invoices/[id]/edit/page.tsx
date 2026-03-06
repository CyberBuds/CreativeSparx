import { getInvoiceById } from '@/lib/invoices';
import { getClients } from '@/lib/clients';
import { EditInvoiceForm } from './form';
import { notFound } from 'next/navigation';

export default async function EditInvoicePage({ params }: { params: { id: string } }) {

  const [invoice, clients] = await Promise.all([
    getInvoiceById(params.id),
    getClients()
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Edit Invoice</h1>
      <EditInvoiceForm invoice={invoice} clients={clients} />
    </div>
  );
}
