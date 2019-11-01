require('dotenv').config();
const express = require('express');
const modemailer = require('nodemailer');
const router = express.Router();


router.get('/', (req, res) => {
  const {generaFrase} = require('../frases.js');
  const fraseAlAzar = generaFrase();
  res.render('index', {frase: fraseAlAzar});
});

router.post('/', (req, res) => {
  const { email, name, subject, message } = req.body;
  //step 1
  let transporter = modemailer.createTransport({
    service: 'gmail',
    auth:{
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    } 
  });
  //step 2
  contentHTML = `
  <h1>Contacto Web</h1>
    <ul>
      <li>Nombre: ${name}</li>
      <li>Email: ${email}</li>
      <li>Email: ${subject}</li>
      <li>Mensaje: ${message}</li>
    </ul>
  `;
  let mailOptions = {
    from: 'lsubiabre@gmail.com',
    to: 'luis.subiabre@gmail.com',
    subject: 'Contacto Web Kundalini Patagonia',
    html: contentHTML
  };
  //step 3
  transporter.sendMail(mailOptions, function(err, data){
    if(err) {
      console.log('Error Occurs ', err);
    } else {
      console.log('Email sent!!!!');
    }
  });
  res.send('Mensaje Enviado');
  //res.render('contact', { title: 'Contact Page', name: name});
});
module.exports = router;