import { db as firestore } from '../lib/firebase-admin';
import { Invoice } from './types';

export async function getInvoices(): Promise<Invoice[]> {
    try {
        const invoicesRef = firestore.collection('invoices');
        const invoicesSnapshot = await invoicesRef.get();

        const invoices = await Promise.all(invoicesSnapshot.docs.map(async (invoiceDoc) => {
            const invoiceData = invoiceDoc.data();
            const invoice: Invoice = {
                id: invoiceDoc.id,
                invoiceNumber: invoiceData.invoiceNumber,
                clientId: invoiceData.clientId,
                amount: invoiceData.amount,
                status: invoiceData.status,
                dueDate: invoiceData.dueDate ? invoiceData.dueDate.toDate() : new Date(),
            };

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

        const invoiceData = invoiceSnap.data();
        if (!invoiceData) {
            return null;
        }

        const invoice: Invoice = {
            id: invoiceSnap.id,
            invoiceNumber: invoiceData.invoiceNumber,
            clientId: invoiceData.clientId,
            amount: invoiceData.amount,
            status: invoiceData.status,
            dueDate: invoiceData.dueDate ? invoiceData.dueDate.toDate() : new Date(),
        };

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
