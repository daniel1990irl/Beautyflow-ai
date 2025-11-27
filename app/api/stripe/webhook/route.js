import stripe from '../../../../lib/stripe';

export const runtime = 'edge';

export async function POST(req) {
  const sig = req.headers.get('stripe-signature') || '';
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Manejar eventos relevantes
  switch (event.type) {
    case 'payment_intent.succeeded':
      // marcar pago en la DB
      console.log('Payment succeeded', event.data.object.id);
      break;
    case 'invoice.payment_failed':
      console.log('Invoice payment failed', event.data.object.id);
      break;
    default:
      console.log('Unhandled event type', event.type);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
