'use server'

import { db } from '../../../lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ClientSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    phone: z.string().min(1, { message: 'Phone is required.' }),
    address: z.string().min(1, { message: 'Address is required.' }),
});

export async function updateClient(clientId: string, prevState: any, formData: FormData) {
    const validatedFields = ClientSchema.safeParse({
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        address: formData.get('address') || '',
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Client.',
        };
    }

    const { name, email, phone, address } = validatedFields.data;

    try {
        await db.collection('clients').doc(clientId).update({
            name,
            email,
            phone,
            address,
        });
    } catch (error) {
        console.error('Error updating client:', error);
        return { message: 'Error updating client' };
    }

    revalidatePath('/dashboard/clients');
    revalidatePath(`/dashboard/clients/${clientId}`);
    redirect('/dashboard/clients');
}
