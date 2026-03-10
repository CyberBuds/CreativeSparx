"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore as db } from '@/lib/firebase/client';

type Payment = {
  id: string;
  invoiceId: string;
  amount: number;
  currency: string;
  status: string;
  txHash?: string;
  createdAt: any;
};

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const querySnapshot = await getDocs(collection(db, "payments"));

      const data: Payment[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Payment),
        id: doc.id,
      }));

      setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Invoice</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Transaction</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.invoiceId}</td>
              <td className="p-2">{p.amount} {p.currency}</td>
              <td className="p-2">{p.status}</td>
              <td className="p-2">
                {p.txHash ? (
                  <a
                    href={`https://tronscan.org/#/transaction/${p.txHash}`}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    View
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}