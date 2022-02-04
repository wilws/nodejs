const path = require('path');
const adminController = require('../controllers/admin');

const express = require('express');
const { route } = require('express/lib/application');
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

router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({title: req.body.title})
//   res.redirect('/');
// });

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddproduct);

router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);
module.exports = router;

// exports.routes = router;
// exports.products = products;