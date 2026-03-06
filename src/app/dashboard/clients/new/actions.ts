'use server'

import { db } from '../../../../lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addClient(userId: string, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string;

    try {
        await db.collection('clients').add({
            userId,
            name,
            email,
            address,
        });
    } catch (error) {
        console.error('Error adding client:', error);
        return { message: 'Error adding client' };
    }

    revalidatePath('/dashboard/clients');
    redirect('/dashboard/clients');
}
