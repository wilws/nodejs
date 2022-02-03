const Product = require('../models/product')

exports.getAddProduct =  (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle:"Add Product", 
      activeAddProduct: true,
      formsCSS: true,
      productCSS: true,
      path: '/admin/add-product'
    });
};


exports.postAddproduct = (req, res, next) => {
    console.log(req)
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,price,description);
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products=>{
        res.render('admin/products', {
            prods: products, 
            pageTitle:"Admin Products", 
            path: '/admin/product', 
        });
    });
};


exports.editProduct = (req, res, next) => {
    Product.fetchAll(products=>{
        res.render('admin/products', {
            prods: products, 
            pageTitle:"Admin Products", 
            path: '/admin/product', 
        });
    });
};