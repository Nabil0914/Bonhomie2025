const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

// POST: Submit Contact Form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ error: 'Server Error: ' + error.message });
  }
});

// GET: Fetch All Contact Submissions
router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Server Error: ' + error.message });
  }
});

module.exports = router;
