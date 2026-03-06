import { getClientById, getClients } from '../../../../../lib/clients';
import { notFound } from 'next/navigation';
import { EditClientForm } from './form';

export async function generateStaticParams() {
  const clients = await getClients();
  return clients.map((client) => ({
    id: client.id,
  }));
}

export default async function EditClientPage({ params }: { params: { id: string } }) {
    const client = await getClientById(params.id);

    if (!client) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Client</h1>
            <EditClientForm client={client} />
        </div>
    );
}
