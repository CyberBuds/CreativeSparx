'use server'

import { db } from '@/lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateInvoice(invoiceId: string, formData: FormData) {
    const description = formData.get('description') as string;
    const amount = formData.get('amount') as string;
    const status = formData.get('status') as string;
    const dueDate = formData.get('dueDate') as string;

    try {
        await db.collection('invoices').doc(invoiceId).update({
            description,
            amount: parseFloat(amount),
            status,
            dueDate: new Date(dueDate),
        });
    } catch (error) {
        console.error('Error updating invoice:', error);
        return { message: 'Error updating invoice' };
    }

    revalidatePath(`/dashboard/invoices/${invoiceId}`);
    revalidatePath('/dashboard/invoices');
    redirect(`/dashboard/invoices/${invoiceId}`);
}
