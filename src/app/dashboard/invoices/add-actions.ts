'use server'

import { db } from '../../../lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { invoiceSchema } from '../../../lib/validations';

type FormState = {
    message: string;
    errors: {
        invoiceNumber?: string[];
        clientId?: string[];
        dueDate?: string[];
        amount?: string[];
        status?: string[];
    }
}

export async function createInvoice(prevState: FormState, formData: FormData) {
  const validatedFields = invoiceSchema.safeParse({
    invoiceNumber: formData.get('invoiceNumber'),
    clientId: formData.get('clientId'),
    dueDate: new Date(formData.get('dueDate') as string),
    amount: Number(formData.get('amount')),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return { 
        message: 'Invalid form data',
        errors: validatedFields.error.flatten().fieldErrors 
    };
  }

  try {
    await db.collection('invoices').add(validatedFields.data);
  } catch (error) {
    console.error('Error creating invoice:', error);
    return { message: 'Error creating invoice', errors: {} };
  }

  revalidatePath('/dashboard/invoices');
  revalidatePath('/dashboard');
  redirect('/dashboard/invoices');
}
