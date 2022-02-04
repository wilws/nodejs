const fs = require('fs');
const path = require('path')

const p = path.join(                                       
    path. dirname(require.main.filename),         
    'data',                                                              
    'cart.json'			
);

module.exports = class Cart {
   
    static addProduct(id, productPrice){

        // Fetch previous cart
        fs.readFile(p, (err, fileContent)=>{
            let cart = { products:[], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }

             // Analyze the cart
            const existProductIndex = cart.products.findIndex(prod => (prod.id === id));
            const existProduct = cart.products[existProductIndex];
            console.log(existProductIndex)
            let updatedProduct;
            if (existProduct) {
                console.log('existing item')
                
                console.log(existProduct)
                updatedProduct = { ...existProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existProductIndex] = updatedProduct;
            } else {
                console.log('new item')
                updatedProduct = { id: id, qty: 1};
                console.log('updatedProduct = ' + updatedProduct)
                cart.products = [...cart.products,updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err)
            });
        });
    }

    static deleteProduct(id, productPrice){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return;
            }
            const updatedCart = { ...cart };
            const product = updateCart.products.find(prod => prod.id ===id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(
                prod => prod.id !== id
            );
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(cart), err =>{
                console.log(err)
            });

        });
    }
}