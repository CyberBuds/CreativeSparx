import { db as firestore } from '../lib/firebase-admin';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { Invoice } from './types';

export async function getInvoices() {
    try {
        const invoicesRef = firestore.collection('invoices');
        const invoicesSnapshot = await invoicesRef.get();

        const invoices = await Promise.all(invoicesSnapshot.docs.map(async (invoiceDoc) => {
            const invoice = { id: invoiceDoc.id, ...invoiceDoc.data() } as Invoice;

            if (invoice.clientId) {
                const clientRef = firestore.collection('clients').doc(invoice.clientId);
                const clientSnap = await clientRef.get();
                if (clientSnap.exists) {
                    invoice.clientName = clientSnap.data()?.name;
                }
            }
            return invoice;
        }));

        return invoices;
    } catch (error) {
        console.error('Error fetching invoices:', error);
        return [];
    }
}

export async function getInvoiceById(invoiceId: string): Promise<Invoice | null> {
    try {
        const invoiceRef = firestore.collection('invoices').doc(invoiceId);
        const invoiceSnap = await invoiceRef.get();

        if (!invoiceSnap.exists) {
            return null;
        }

        const invoice = { id: invoiceSnap.id, ...invoiceSnap.data() } as Invoice;

        if (invoice.clientId) {
            const clientRef = firestore.collection('clients').doc(invoice.clientId);
            const clientSnap = await clientRef.get();
            if (clientSnap.exists) {
                invoice.clientName = clientSnap.data()?.name;
            }
        }

        return invoice;
    } catch (error) {
        console.error('Error fetching invoice:', error);
        return null;
    }
}
