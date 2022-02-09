// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '123AB123'
// });

// module.exports = pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','123AB123',{
    dialect:'mysql', 
    host: 'localhost'
}); 

module.exports = sequelize