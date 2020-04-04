const db = require('../database');

module.exports = {
    getAllProducts : (req,res) => {
        let sql = 'SELECT * FROM products ORDER BY category'
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    getProductLaptop : (req,res) => {
        let sql = 'SELECT * FROM products WHERE category="laptop"'
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    getProductAksesoris : (req,res) => {
        let sql = 'SELECT * FROM products WHERE category="aksesoris"'
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    getProductHandphone : (req,res) => {
        let sql = 'SELECT * FROM products WHERE category="handphone"'
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    addProduct : (req,res) => {
        let sql = `INSERT INTO products SET ?`
        db.query(sql, req.body, (err, results) => {
            if(err) {
              return res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    deleteProduct : (req, res) => {
        let sql = `DELETE FROM products WHERE id=${req.params.id}`
        db.query(sql, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }

            res.status(200).send(results)
        })
    },

    editProduct : (req,res) => {
        let sql = `UPDATE products SET ? WHERE id=${req.params.id}`
        db.query(sql, req.body, (err,results) => {
            if(err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    }
}