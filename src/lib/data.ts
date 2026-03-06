import { unstable_noStore as noStore } from 'next/cache';
import { 
    LatestInvoiceRaw, 
    Revenue, 
} from './definitions';
import { db } from './firebase-admin'; // Import the initialized Firestore instance

export async function fetchRevenue() {
    noStore();
    try {
        const revenueCollection = db.collection('revenue');
        const snapshot = await revenueCollection.get();
        const data = snapshot.docs.map(doc => doc.data() as Revenue);
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchLatestInvoices() {
    noStore();
    try {
        const invoicesCollection = db.collection('invoices').orderBy('date', 'desc').limit(5);
        const invoiceSnapshot = await invoicesCollection.get();
        
        const latestInvoices: LatestInvoiceRaw[] = [];

        for (const invoiceDoc of invoiceSnapshot.docs) {
            const invoiceData = invoiceDoc.data();
            const customerDoc = await db.collection('customers').doc(invoiceData.customer_id).get();
            const customerData = customerDoc.data();

            if (customerData) {
                latestInvoices.push({
                    id: invoiceDoc.id,
                    amount: invoiceData.amount,
                    name: customerData.name,
                    image_url: customerData.image_url,
                    email: customerData.email,
                });
            }
        }

        const formattedInvoices = latestInvoices.map((invoice) => ({
            ...invoice,
            amount: (invoice.amount / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            }),
        }));
        return formattedInvoices;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest invoices.');
    }
}

export async function fetchCardData() {
    noStore();
    try {
        const invoicePromise = db.collection('invoices').get();
        const customerPromise = db.collection('customers').get();
        
        const [invoiceSnapshot, customerSnapshot] = await Promise.all([
            invoicePromise,
            customerPromise
        ]);

        const numberOfInvoices = invoiceSnapshot.size;
        const numberOfCustomers = customerSnapshot.size;
        
        let totalPaidInvoices = 0;
        let totalPendingInvoices = 0;

        invoiceSnapshot.forEach(doc => {
            const data = doc.data();
            if (data.status === 'paid') {
                totalPaidInvoices += data.amount;
            } else if (data.status === 'pending') {
                totalPendingInvoices += data.amount;
            }
        });

        return {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices: (totalPaidInvoices / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            totalPendingInvoices: (totalPendingInvoices / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}
