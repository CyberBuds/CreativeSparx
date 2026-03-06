'use client';

import { updateClient } from '../../actions';
import { useFormState } from 'react-dom';

export function EditClientForm({ client }: { client: { id: string, name: string, email: string, phone: string, address: string } }) {
  const initialState = { message: '', errors: {} };
  const [state, formAction] = useFormState(updateClient, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={client.id} />
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" defaultValue={client.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state.errors?.name && <p className="mt-2 text-sm text-red-600">{state.errors.name.join(', ')}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" defaultValue={client.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state.errors?.email && <p className="mt-2 text-sm text-red-600">{state.errors.email.join(', ')}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" name="phone" id="phone" defaultValue={client.phone} className="mt-1 block w-full rounded-.md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state.errors?.phone && <p className="mt-2 text-sm text-red-600">{state.errors.phone.join(', ')}</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea name="address" id="address" defaultValue={client.address} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
          {state.errors?.address && <p className="mt-2 text-sm text-red-600">{state.errors.address.join(', ')}</p>}
        </div>
      </div>
      <button type="submit" className="mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Update Client
      </button>
      {state.message && <p className="mt-2 text-sm text-red-600">{state.message}</p>}
    </form>
  )
}
