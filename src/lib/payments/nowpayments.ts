const NOWPAYMENTS_API = "https://api.nowpayments.io/v1/payment";

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
    pay_currency: "usdttrc20",
    order_id: invoiceId,
    order_description: "CreativeSparx Invoice Payment"
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