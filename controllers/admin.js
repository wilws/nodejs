const Product = require('../models/product')



exports.getAddProduct =  (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle:"Add Product", 
      path: '/admin/add-product',
      editing: "false",
      
    });
};

exports.postEditProduct =  (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDec = req.body.description;
    const updatedProduct = new Product(
        prodId,
        updatedTitle,   
        updatedImageUrl,
        updatedPrice,
        updatedDec,
    );

    Product.findByPk(prodId)
    .then(product => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.description = updatedDec;
        product.imageUrl = updatedImageUrl;
        return product.save()  
    }).then(result=>{
        console.log('UPDATED PRODUCT')
        res.redirect('/admin/products');
    })
    .catch(err => console.log(err));

    
};

exports.getEditProduct =  (req, res, next) => {
    const editMode = req.query.edit;
    if (editMode === "false") {
        res.redirect('/');
    } else {
        const proId = req.params.productId;
        Product.findByPk(proId)
        .then(product => {
            if (!product) {
                res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle:"Edit Product", 
                path: '/admin/edit-product',
                editing: editMode,
                product:product
            });
        })
        .catch(err=>{console.log(err)})
    }
};


exports.postAddproduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null,title,imageUrl,price,description);
    // product.save()
    // .then(() => {
    //     res.redirect('/');
    // })
    // .catch(err => console.log(err));
    Product.create({
        title:title,
        imageUrl:imageUrl,
        price: price,
        description: description
    })
    .then(result=>{
        console.log('Created');
        res.redirect('/admin/products');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then((products)=>{
        res.render('admin/products', {
        prods: products, 
        pageTitle:"Admin Products", 
        path: '/admin/product', 
      });
    })
    .catch(err => console.log(err)); 
};


exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    // Product.destroy(prodId);

    Product.findByPk(prodId)
    .then(product =>{
        return product.destroy();
    })
    .then(result=>{
        res.redirect('/admin/products');
    })
    .catch(err =>{ console.log(err)});
    
};

// exports.editProduct = (req, res, next) => {
//     Product.fetchAll(products=>{
//         res.render('admin/products', {
//             prods: products, 
//             pageTitle:"Admin Products", 
//             path: '/admin/product', 
//         });
//     });
// };

