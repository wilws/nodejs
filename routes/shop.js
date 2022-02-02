const path = require('path');
const express = require('express');
const productController = require('../controllers/products');
const router = express.Router();


router.get('/',productController.getProducts);

// router.get('/', (req, res, next) => {
//   // console.log('adminData.product')
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   const products = adminData.products;
//   res.render('shop', {
//     prods: products, 
//     pageTitle:"Shop", 
//     path: '/', 
//     // layout:true, 
//     activeShop: true,
//     productCSS: true,
//     hasProducts: products.length > 0
//   });
// });

module.exports = router;
