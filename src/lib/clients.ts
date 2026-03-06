import { db } from '../lib/firebase-admin';
import { Client } from './types';

export async function getClients(): Promise<Client[]> {
    try {
        const clientsRef = db.collection('clients');
        const clientsSnapshot = await clientsRef.get();

        const clients = clientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Client));
        return clients;
    } catch (error) {
        console.error('Error fetching clients:', error);
        return [];
    }
}

export async function getClientById(clientId: string): Promise<Client | null> {
    try {
        const clientRef = db.collection('clients').doc(clientId);
        const clientSnap = await clientRef.get();

        if (!clientSnap.exists) {
            return null;
        }

        return { id: clientSnap.id, ...clientSnap.data() } as Client;
    } catch (error) {
        console.error('Error fetching client:', error);
        return null;
    }
}
