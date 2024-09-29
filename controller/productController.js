const prod = require('../model/product');

const evange = {
    admin: (req, res) => {
        prod.getAll((err, products) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error retrieving products from the database");
            }
            res.render('addmin', { products: products });
        });
    },
    
    addProduct: (req, res) => {
        const { name, description, price, quantity } = req.body;
        const data = { name, description, price, quantity };
        
        prod.create(data, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error adding product to the database");
            }
            res.redirect('/admin');
        });
    }
};

module.exports = evange;
