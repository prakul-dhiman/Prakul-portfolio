const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }
  
  // Log the message (works without email setup)
  console.log('\n📬 NEW MESSAGE RECEIVED:');
  console.log('From:', name, '<' + email + '>');
  console.log('Subject:', subject || 'No subject');
  console.log('Message:', message);
  console.log('Time:', new Date().toLocaleString());
  console.log('─'.repeat(50));
  
  res.json({ success: true, message: 'Message received!' });
});

module.exports = router;
