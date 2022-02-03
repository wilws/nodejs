const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();


router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProduct);

router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout);
router.get('/orders',shopController.getOrders);

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
