'use client'

import { useFormState } from 'react-dom';
import { updateInvoice } from '@/app/dashboard/invoices/actions';
import { Invoice, Client } from '@/lib/types';

const initialState = {
  message: '',
  errors: {
    invoiceNumber: [],
    clientId: [],
    dueDate: [],
    amount: [],
    status: [],
  },
}

export function EditInvoiceForm({ invoice, clients }: { invoice: Invoice, clients: Client[] }) {
  const [state, formAction] = useFormState(updateInvoice, initialState)

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <input type="hidden" name="invoiceId" value={invoice.id} />
      <div>
        <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          required
          defaultValue={invoice.invoiceNumber}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="INV-001"
        />
        {state.errors?.invoiceNumber &&
          state.errors.invoiceNumber.map((error: string) => (
            <p className="mt-2 text-sm text-red-600" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Client</label>
        <select
          name="clientId"
          required
          defaultValue={invoice.clientId}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            <option value="">Select a client</option>
            {clients.map(client => (
                <option key={client.id} value={client.id}>{client.name}</option>
            ))}
        </select>
        {state.errors?.clientId &&
          state.errors.clientId.map((error: string) => (
            <p className="mt-2 text-sm text-red-600" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          name="dueDate"
          required
          defaultValue={new Date(invoice.dueDate).toISOString().split('T')[0]}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {state.errors?.dueDate &&
          state.errors.dueDate.map((error: string) => (
            <p className="mt-2 text-sm text-red-600" key={error}>
              {error}
            </p>
          ))}
      </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
                type="number"
                name="amount"
                required
                defaultValue={invoice.amount}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="100.00"
            />
            {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                    <p className="mt-2 text-sm text-red-600" key={error}>
                    {error}
                    </p>
                ))}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
                name="status"
                required
                defaultValue={invoice.status}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="due">Due</option>
                <option value="paid">Paid</option>
            </select>
            {state.errors?.status &&
                state.errors.status.map((error: string) => (
                    <p className="mt-2 text-sm text-red-600" key={error}>
                    {error}
                    </p>
                ))}
        </div>
      {state.message && (
        <div className="mt-2 text-sm text-red-600">
          <p>{state.message}</p>
        </div>
      )}
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Update Invoice
      </button>
    </form>
  )
}
