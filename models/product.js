
const Sequelize = require('sequelize')
const sequelize = require("../util/database");

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    imageUrl:{
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;

// const db = require('../util/database');
// const Cart = require('./cart');


// module.exports = class Product {
//     constructor(id,title, imageUrl, price, description){
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save(){
//         return db.execute('INSERT INTO products(title, price, imageUrl, description) VALUES (?,?,?,?)',
//         [this.title, this.price, this.imageUrl, this.description]
//        );
//     }

//     static deleteById(id){
    
//     }

//     static fetchAll(){
//        return db.execute('SELECT *  FROM products');

//     }

//     static findById(id){
//        return db.execute('SELECT *  FROM products WHERE id = ?', [id]);
//     }
// }





// // const fs = require('fs');
// // const path = require('path');
// const Cart = require('./cart');

// const p = path.join(                  //The path.join() method joins all given path segments together 
//     path.dirname(require.main.filename),
//     'data',
//     'products.json'
// );




// // const getProductsFromFile = cb =>{
// //     fs.readFile(p,(err, fileContent)=>{
// //         if(err){
// //             cb([]);
// //         } else {
// //             cb(JSON.parse(fileContent));
// //         }
            
// //     });
// // };


// function getProductsFromFile(cb){
//     fs.readFile(p,(err, fileContent)=>{
//         if(err){
//             cb([]);
//         } else {
//             cb(JSON.parse(fileContent));
//         }
            
//     });
// };



// module.exports = class Product {
//     constructor(id,title, imageUrl, price, description){
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save(){
//         getProductsFromFile(products => {
//             if (this.id){
//                 const existingProductIndex = products.findIndex(
//                     prod => prod.id === this.id
//                 );
//                 const updatedProducts = [...products];
//                 updatedProducts[existingProductIndex] = this;
//                 fs.writeFile(p, JSON.stringify(updatedProducts),(err) =>{
//                     console.log(err);
//                 });
//             } else {
//                 this.id = Math.random().toString();
//                 products.push(this);
//                 fs.writeFile(p, JSON.stringify(products),(err) =>{
//                     console.log(err);
//                 });
//             }
//         });
//     }

//     static deleteById(id){
//         getProductsFromFile(products=>{
//             const updatedProducts = products.filter(p => (p.id !== id));
//             fs.writeFile(p, JSON.stringify(updatedProducts), err=>{
//                 if(!err){
//                     Cart.deleteProduct(id,products.price);
//                 }
//             });
//         });
//     }

//     static fetchAll(cb){
//       getProductsFromFile(cb)
//     }

//     static findById(id, cb){
//         getProductsFromFile(products => {
//             const product = products.find(p => (p.id === id));
//             cb(product);
//         });
//     }
// }

