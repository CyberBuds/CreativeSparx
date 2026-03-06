'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteClient } from "./actions";
import { toast } from "sonner";
import { Client } from "../../../lib/types";

interface ClientsPageProps {
    clients: Client[];
}

export default function ClientsPage({ clients: initialClients }: ClientsPageProps) {
    const [clients, setClients] = useState<Client[]>(initialClients);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = async (clientId: string) => {
        const result = await deleteClient(clientId);

        if (result.message === 'Client deleted successfully') {
            setClients(clients.filter(client => client.id !== clientId));
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setClients(initialClients);
    }, [initialClients]);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Clients</h1>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search clients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Link href="/dashboard/clients/add" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Client
                    </Link>
                </div>
            </div>

            <div className="mt-4">
                {filteredClients.length > 0 ? (
                    <ul className="space-y-4">
                        {filteredClients.map(client => (
                            <li key={client.id} className="p-4 bg-white rounded-md shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">{client.name}</p>
                                        <p className="text-sm text-gray-500">{client.email}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Link href={`/dashboard/clients/${client.id}/edit`} className="text-sm text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(client.id)} className="text-sm text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 p-8 text-center bg-white rounded-md shadow-sm">
                         <p className="mt-4 text-lg font-semibold text-gray-800">You don&apos;t have any clients yet.</p>
                         <p className="mt-2 text-sm text-gray-500">Add a new client to get started.</p>
                     </div>
                )}
            </div>
        </div>
    );
}
