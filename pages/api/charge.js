import Stripe from "stripe";
// don't commit your real stripe secret key... use env variables!!
// https://www.leighhalliday.com/secrets-env-vars-nextjs-now
const stripe = new Stripe("sk_test_ZyjeXo8803puaEGF5hYfWFP4");

export default async (req, res) => {
  const { amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Delicious empanadas",
    });
    res.json({'client_secret': paymentIntent['client_secret']})
    
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message
    });
  }
};
