import { db as adminDb } from "@/lib/firebase-admin";
import PayButton from "@/components/payments/pay-button";

export default async function InvoicePage({ params }: any) {

  const invoiceId = params.invoiceId;

  const doc = await adminDb
    .collection("invoices")
    .doc(invoiceId)
    .get();

  if (!doc.exists) {
    return <div>Invoice not found</div>;
  }

  const invoice = doc.data();

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold">
        Invoice {invoiceId}
      </h1>

      <p>Client: {invoice?.clientEmail}</p>

      <p className="text-lg font-semibold">
        Amount: ${invoice?.amount}
      </p>

      {invoice?.status === "paid" ? (
        <div className="text-green-600 mt-4">
          Payment Completed ✅
        </div>
      ) : (
        <PayButton
          invoiceId={invoiceId}
          amount={invoice?.amount}
        />
      )}

    </div>
  );
}