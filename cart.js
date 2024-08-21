// routes/cart.js

const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT'); // Import middleware

// Route handlers
router.post('/add', authenticateJWT, (req, res) => {
    // Add item to cart logic
    res.send({ message: 'Item added to cart' });
});

router.delete('/remove/:productId', authenticateJWT, (req, res) => {
    // Remove item from cart logic
    res.send({ message: 'Item removed from cart' });
});

router.get('/view', authenticateJWT, (req, res) => {
    // View cart logic
    res.send({ cart: [] });
});

module.exports = router; // Export router
