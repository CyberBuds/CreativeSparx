import { NextResponse } from "next/server";
import { createCryptoPayment } from "@/lib/payments/nowpayments";

export async function POST(req: Request) {

  const body = await req.json();

  const payment = await createCryptoPayment({
    amount: body.amount,
    invoiceId: body.invoiceId
  });

  return NextResponse.json(payment);
}