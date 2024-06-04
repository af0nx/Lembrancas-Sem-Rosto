import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../contexts/CartContext';

const stripePromise = loadStripe('pk_test_51L9yFuL7TrkewcBVB54UvQvkkFejktDsb6nTdwhooibaAg09QKP8g1VRMw9dZEOb2YfYXB4CUGY57lIdyPrcTWSt00YviIxeGH'); // Substitua pela sua chave pública do Stripe

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, clearCart } = useContext(CartContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      console.log('Starting payment process...');
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalAmount * 100 }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Failed to create payment intent');
      }

      const data = await response.json();
      console.log('Received data:', data);

      const { clientSecret, error: backendError } = data;

      if (backendError) {
        setError(backendError.message);
        setProcessing(false);
        console.error('Backend error:', backendError.message);
        return;
      }

      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
        console.error('Stripe error:', stripeError.message);
        return;
      }

      setSuccess(true);
      clearCart();
      setProcessing(false);
      console.log('Payment successful');
    } catch (err) {
      setError('Failed to process payment. Please try again.');
      setProcessing(false);
      console.error('Error during payment process:', err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardElement">
            Card Details
          </label>
          <div className="border rounded p-2">
            <CardElement id="cardElement" />
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">Total: <span className="font-bold">R${totalAmount}</span></p>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">Payment Successful!</div>}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${processing ? 'bg-blue-300' : 'hover:bg-blue-600'}`}
          disabled={!stripe || processing}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
