import React from 'react';

const CheckoutForm = () => {
  const handlePayment = async () => {
    const response = await fetch('/create-order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: 500 }) });
    const { id: order_id } = await response.json();

    const options = {
      key: 'your_key_id',
      amount: 500 * 100, // amount in paise
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: order_id,
      handler: function (response) {
        console.log(response);
        // Handle success (e.g., generate certificate)
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button onClick={handlePayment} className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-red-500 transition">
      Pay with Razorpay
    </button>
  );
};

export default CheckoutForm;
