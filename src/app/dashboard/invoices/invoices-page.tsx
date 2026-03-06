'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteInvoice } from "./actions";
import { toast } from "sonner";
import { Invoice } from "@/lib/types";

interface InvoicesPageProps {
    invoices: Invoice[];
}

export default function InvoicesPage({ invoices: initialInvoices }: InvoicesPageProps) {
    const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = async (invoiceId: string) => {
        const result = await deleteInvoice(invoiceId);

        if (result.message === 'Invoice deleted successfully') {
            setInvoices(invoices.filter(invoice => invoice.id !== invoiceId));
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    const filteredInvoices = invoices.filter(invoice =>
        invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (invoice.clientName || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setInvoices(initialInvoices);
    }, [initialInvoices]);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Invoices</h1>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search invoices..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Link href="/dashboard/invoices/add" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Invoice
                    </Link>
                </div>
            </div>

            <div className="mt-4">
                {filteredInvoices.length > 0 ? (
                    <ul className="space-y-4">
                        {filteredInvoices.map(invoice => (
                            <li key={invoice.id} className="p-4 bg-white rounded-md shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">Invoice {invoice.invoiceNumber}</p>
                                        <p className="text-sm text-gray-500">{invoice.clientName}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Link href={`/dashboard/invoices/${invoice.id}/edit`} className="text-sm text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(invoice.id)} className="text-sm text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 p-8 text-center bg-white rounded-md shadow-sm">
                         <p className="mt-4 text-lg font-semibold text-gray-800">You don&apos;t have any invoices yet.</p>
                         <p className="mt-2 text-sm text-gray-500">Add a new invoice to get started.</p>
                     </div>
                )}
            </div>
        </div>
    );
}
