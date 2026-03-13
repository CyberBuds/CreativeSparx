"use client";

import { useState } from "react";

export default function PayButton({ invoiceId, amount }: any) {

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const res = await fetch("/api/payment/create", {
      method: "POST",
      body: JSON.stringify({
        invoiceId,
        amount
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.invoice_url) {
      window.location.href = data.invoice_url;
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="mt-6 bg-purple-600 text-white px-4 py-2 rounded"
    >
      {loading ? "Processing..." : "Pay with USDT"}
    </button>
  );
}