'use client'

import { createClient } from '../actions';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { toast } from 'sonner';

function AddClientForm() {
  const [state, formAction] = useFormState(createClient, { message: '', errors: { name: [], email: [], phone: [], address: [] } });

  useEffect(() => {
    if (state.message && state.errors) {
        toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state?.errors?.name && <p className="mt-2 text-sm text-red-600">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state?.errors?.email && <p className="mt-2 text-sm text-red-600">{state.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          {state?.errors?.phone && <p className="mt-2 text-sm text-red-600">{state.errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea name="address" id="address" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
          {state?.errors?.address && <p className="mt-2 text-sm text-red-600">{state.errors.address}</p>}
        </div>
      </div>
      <button type="submit" className="mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Add Client
      </button>
    </form>
  )
}

export default function AddClientPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add a New Client</h1>
      <AddClientForm />
    </div>
  );
}
