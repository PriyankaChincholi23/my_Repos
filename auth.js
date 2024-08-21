// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).send({ message: 'User registered successfully' });
// });

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(401).send({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.send({ token });
// });

// module.exports = router;
// const authenticateJWT = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(403).send({ message: 'Token is required' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) {
//             return res.status(403).send({ message: 'Invalid token' });
//         }
//         req.user = user;
//         next();
//     });
// };

// module.exports = { router, authenticateJWT };
// routes/auth.js

const express = require('express');
const router = express.Router();

// Define routes
router.post('/register', (req, res) => {
    // Registration logic
});

router.post('/login', (req, res) => {
    // Login logic
});

module.exports = router;

