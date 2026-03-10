import { db as adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {

  const data = await req.json();

  if (data.payment_status === "confirmed") {

    const invoiceId = data.order_id;

    await adminDb
      .collection("invoices")
      .doc(invoiceId)
      .update({
        status: "paid",
        transactionHash: data.tx_hash
      });
  }

  return new Response("OK");
}