const products = []

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
    products.push({title: req.body.title})
    res.redirect('/');
};



exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products, 
      pageTitle:"Shop", 
      path: '/', 
      // layout:true, 
      activeShop: true,
      productCSS: true,
      hasProducts: products.length > 0
    });
  };