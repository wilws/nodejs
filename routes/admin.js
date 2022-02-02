const path = require('path');
const productController = require('../controllers/products');

const express = require('express');
const router = express.Router();


// /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product',{
//     pageTitle:"Add Product", 
//     activeAddProduct: true,
//     formsCSS: true,
//     path: '/admin/add-product'})
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });

router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({title: req.body.title})
//   res.redirect('/');
// });

router.post('/add-product', productController.postAddproduct);

module.exports = router;

// exports.routes = router;
// exports.products = products;