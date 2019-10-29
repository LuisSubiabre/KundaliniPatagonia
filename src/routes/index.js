const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const {generaFrase} = require('../frases.js');
  const fraseAlAzar = generaFrase();
  res.render('index', {frase: fraseAlAzar});
});

module.exports = router;