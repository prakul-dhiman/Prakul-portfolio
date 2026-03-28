const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes' }
});

// Routes
app.use('/api/contact', apiLimiter, contactRouter);

app.get('/api/portfolio', (req, res) => {
  res.json({ message: "Portfolio API is running. CV Data can be served here." });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
