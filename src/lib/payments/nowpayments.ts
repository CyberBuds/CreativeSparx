const NOWPAYMENTS_API = "https://api.nowpayments.io/v1/invoice";

export async function createCryptoPayment({
  invoiceId,
  amount
}: {
  invoiceId: string;
  amount: number;
}) {

  const paymentData = {
    price_amount: amount,
    price_currency: "usd",
    order_id: invoiceId,
    order_description: "CreativeSparx Invoice Payment",
    ipn_callback_url: "https://creative-sparx.vercel.app/api/payment/webhook"
  };

  const response = await fetch(NOWPAYMENTS_API, {
    method: "POST",
    headers: {
      "x-api-key": process.env.NOWPAYMENTS_API_KEY!,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paymentData)
  });

  const data = await response.json();

  return data;
}