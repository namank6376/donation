const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');

const app = express();
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'your_key_id',
  key_secret: 'your_key_secret',
});

app.post('/create-order', async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // amount in paise
    currency: 'INR',
    receipt: 'receipt_order_' + Math.floor(Math.random() * 1000),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
