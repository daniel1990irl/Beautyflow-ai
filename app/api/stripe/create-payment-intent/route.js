import stripe from '../../../../lib/stripe';

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, currency = 'eur', metadata = {} } = body;

    if (!amount) {
      return new Response(JSON.stringify({ error: 'Amount is required (in cents).' }), { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata
    });

    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 });
  } catch (err) {
    console.error('create-payment-intent error', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
