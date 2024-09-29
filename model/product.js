const db = require('../config/db.js');

const prod = {
    create: (data, callback) => {
        const query = "INSERT INTO product (name, description, price, quantity) VALUES (?, ?, ?, ?)";
        db.query(query, [data.name, data.description, data.price, data.quantity], callback);
    },
    
    getAll: (callback) => {
        const query = "SELECT * FROM product";
        db.query(query, callback);
    }
};

module.exports = prod;
