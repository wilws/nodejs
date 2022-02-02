const Product = require('../models/product')

exports.getAddProduct =  (req, res, next) => {
    res.render('add-product', {
      pageTitle:"Add Product", 
      activeAddProduct: true,
      formsCSS: true,
      productCSS: true,
      path: '/admin/add-product'
    });
};


exports.postAddproduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
};



exports.getProducts = (req, res, next) => {
    Product.fetchAll(products=>{
      res.render('shop', {
        prods: products, 
        pageTitle:"Shop", 
        path: '/', 
        // layout:true, 
        activeShop: true,
        productCSS: true,
        hasProducts: products.length > 0
      });
    });
  };