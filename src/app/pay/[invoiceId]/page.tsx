import { db as adminDb } from "@/lib/firebase-admin";

export default async function InvoicePage({ params }: any) {

  const { invoiceId } = params;

  const doc = await adminDb
    .collection("invoices")
    .doc(invoiceId)
    .get();

  const invoice = doc.data();

  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold">
        Invoice {invoiceId}
      </h1>

      <p>Client: {invoice.clientEmail}</p>

      <p className="text-lg font-semibold">
        Amount: ${invoice.amount}
      </p>

      {invoice.status === "paid" ? (
        <div className="text-green-600 mt-4">
          Payment Completed ✅
        </div>
      ) : (
        <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded">
          Pay with USDT
        </button>
      )}

    </div>
  );
}