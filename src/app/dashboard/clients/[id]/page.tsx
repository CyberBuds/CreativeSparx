import { getClientById, getClients } from "@/lib/clients";
import { notFound } from "next/navigation";
import { lusitana } from "@/components/fonts";

export async function generateStaticParams() {
    const clients = await getClients();
    return clients.map((client) => ({
        id: client.id,
    }));
}

export default async function ClientPage({ params }: { params: { id: string } }) {
    const client = await getClientById(params.id);

    if (!client) {
        notFound();
    }

    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl`}>Client Details</h1>
            <div className="mt-6">
                <p className="text-lg"><strong>Name:</strong> {client.name}</p>
                <p className="text-lg"><strong>Email:</strong> {client.email}</p>
                <p className="text-lg"><strong>Phone:</strong> {client.phone}</p>
                <p className="text-lg"><strong>Address:</strong> {client.address}</p>
            </div>
        </div>
    );
}
