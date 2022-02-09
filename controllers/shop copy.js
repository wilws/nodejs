const Product = require('../models/product');
const Cart = require('../models/cart');

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



exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product =>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.title, 
      path: '/products', 
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
    Cart.getCart(cart=>{
      Product.fetchAll(products => {
        const cartProducts = []
        for (product of products) {
          const cartProductData = cart.products.find(prod => prod.id === product.id);
          if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
          }
        }

        res.render('shop/cart', {
          path: '/cart', 
          pageTitle:"Your Cart", 
          products : cartProducts,
        });
      })
    })
  };

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price)
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct =  (req, res, next) => {
  
  const prodId = req.body.productId;
  const price = req.body.price;
  console.log(prodId);
  console.log(price);
  Cart.deleteProduct(prodId, price)
  res.redirect('/cart');
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


  
