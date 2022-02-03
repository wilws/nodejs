const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products=>{
      
      res.render('shop/product-list', {
        prods: products, 
        pageTitle:"Shop", 
        path: '/products', 
        // layout:true, 
        // activeShop: true,
        // productCSS: true,
        // hasProducts: products.length > 0
      });
    });
  };

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products=>{
    res.render('shop/index', {
      prods: products, 
      pageTitle:"All Products", 
      path: '/', 
      // layout:true, 
      // activeShop: true,
      // productCSS: true,
      // hasProducts: products.length > 0
    });
  });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      path: '/cart', 
      pageTitle:"Your Cart", 
    });
  };



exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders', 
    pageTitle:"Your Orders", 
  });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      path: '/checkout', 
      pageTitle:"Checkout", 
    });
  };
