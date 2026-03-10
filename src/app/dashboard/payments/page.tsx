'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore as db } from '@/lib/firebase/client';

type Payment = {
  id: string;
  invoiceId: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: any;
};

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const querySnapshot = await getDocs(collection(db, 'payments'));

      const data: Payment[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Payment),
        id: doc.id,
      }));

      setPayments(data);
    };

    fetchPayments();
  }, []);

  const totalPaid = payments
    .filter((p) => p.status === 'confirmed')
    .reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payments Overview</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-gray-500">Total Paid</h2>
          <p className="text-xl font-semibold">{totalPaid} USDT</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-gray-500">Transactions</h2>
          <p className="text-xl font-semibold">{payments.length}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">Recent Payments</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Invoice</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.slice(0, 5).map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.invoiceId}</td>
              <td className="p-2">{p.amount} {p.currency}</td>
              <td className="p-2">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
