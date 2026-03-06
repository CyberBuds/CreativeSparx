import { getInvoiceById } from "@/lib/invoices";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function InvoicePage({ params }: { params: { id: string } }) {
    const invoice = await getInvoiceById(params.id);

    if (!invoice) {
        return notFound();
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Invoice {invoice.invoiceNumber}</h1>
                <Link href={`/dashboard/invoices/${params.id}/edit`} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Edit Invoice
                </Link>
            </div>

            <div className="mt-4">
                <p className="text-gray-500">Client: {invoice.clientName}</p>
                <p className="text-gray-500">Amount: ${invoice.amount.toFixed(2)}</p>
                <p className="text-gray-500">Status: {invoice.status}</p>
                <p className="text-gray-500">Due Date: {new Date(invoice.dueDate).toLocaleDateString()}</p>
            </div>
        </div>
    );
}
