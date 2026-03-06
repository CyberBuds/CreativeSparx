'use server'

import { db } from '../../../lib/firebase-admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ClientSchema = z.object({
    id: z.string(),
    name: z.string().min(1, { message: 'Name is required.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    phone: z.string().min(1, { message: 'Phone is required.' }),
    address: z.string().min(1, { message: 'Address is required.' }),
});

const CreateClient = ClientSchema.omit({ id: true });
const UpdateClient = ClientSchema;


export async function createClient(prevState: any, formData: FormData) {
    const validatedFields = CreateClient.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Client.',
        };
    }

    try {
        await db.collection('clients').add({
            name: validatedFields.data.name,
            email: validatedFields.data.email,
            phone: validatedFields.data.phone,
            address: validatedFields.data.address,
        });
    } catch (error) {
        console.error('Error creating client:', error);
        return { message: 'Error creating client' };
    }

    revalidatePath('/dashboard/clients');
    redirect('/dashboard/clients');
}

export async function updateClient(prevState: any, formData: FormData) {
    const validatedFields = UpdateClient.safeParse({
        id: formData.get('id'),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Client.',
        };
    }

    const { id, ...clientData } = validatedFields.data;

    try {
        await db.collection('clients').doc(id).update(clientData);
    } catch (error) {
        console.error('Error updating client:', error);
        return { message: 'Error updating client' };
    }

    revalidatePath('/dashboard/clients');
    redirect('/dashboard/clients');
}


export async function deleteClient(clientId: string) {
    try {
        await db.collection('clients').doc(clientId).delete();
        revalidatePath('/dashboard/clients');
        return { message: 'Client deleted successfully' };
    } catch (error) {
        console.error('Error deleting client:', error);
        return { message: 'Error deleting client' };
    }
}
