const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'confirmreservation1@zohomail.com',
    pass: 'Twin$1991',
  },
});

module.exports = transporter;