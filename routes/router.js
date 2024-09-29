const express = require('express');
const router = express.Router();
const evange = require('../controller/productController');

// Route to render admin page
router.get('/admin', evange.admin);

// Route to handle adding a new product
router.post('/admin/add-product', evange.addProduct);

module.exports = router;
