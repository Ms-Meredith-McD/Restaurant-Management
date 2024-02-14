const nodemailer = require('nodemailer');

// Set up your email transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'confirmreservation1@gmail.com',
    pass: 'Twin$1991',
  },
});