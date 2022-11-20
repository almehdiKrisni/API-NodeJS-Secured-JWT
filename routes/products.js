const express = require('express');

const router = express.Router();

const createError = require('http-errors');

// Products Array

const products = [{ id: '1', name: 'Playstation 5', inStock: false }];

// GET / => array of items

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;