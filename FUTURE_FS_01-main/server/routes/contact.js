const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// @route   POST api/contact
// @desc    Create a contact message
// @access  Public
router.post("/api/contact", async (req, res) => {
  res.send("Contact route is working");
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
