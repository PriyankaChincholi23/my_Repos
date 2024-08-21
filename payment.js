// routes/payment.js

const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT'); // Ensure path is correct
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/process', authenticateJWT, async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
            message: 'Payment initiated',
        });
    } catch (error) {
        res.status(500).send({ message: 'Payment failed', error });
    }
});

module.exports = router;
