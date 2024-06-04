const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const authRoutes = require('./routes/router'); // Importe as rotas de autenticação
const bodyParser = require('body-parser');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
const Email = require('./models/email'); // Importe o modelo de E-mail

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).send({ message: 'Email is required' });
    }
  
    try {
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(200).send({ message: 'Registered successfully!' });
    } catch (error) {
      console.error('Error saving email:', error);
      if (error.code === 11000) { // Duplicate key error
        res.status(400).send({ message: 'Email already subscribed' });
      } else {
        res.status(500).send({ message: 'Server error' });
      }
    }
  });

  
  app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    console.log('Received payment request:', amount);
  
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
  
      console.log('PaymentIntent created:', paymentIntent);
  
      // Retornar JSON
      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
      res.status(500).json({ error: error.message });
    }
  });
  

// Roteamento
app.use('/auth', authRoutes);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
