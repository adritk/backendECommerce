const db = require('../database');

module.exports = {
    login : (req,res) => {
        const {username, password} = req.body
        let sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
        db.query(sql, (err, results) => {
            if(err) {
                return res.status(500).send(err.message)
            }
            console.log(results)
            if(results.length == 0) {
                return res.status(500).send({msg : 'gaada user'})
            }
            
            return res.status(200).send(results)
        })
    },

    register : (req,res) => {
        const {username,password,role} = req.body
        let sql = `INSERT INTO users (username,password,role) VALUES ('${username}', '${password}', '${role}')`
        db.query(sql, req.body,(err, results) => {
            if(err) {
                return res.status(500).send(err.message)
            }

            console.log(results)
           return res.status(200).send(results)
        }) 
    },

    getAllUser : (req,res) => {
        let sql = `SELECT * FROM users`
        db.query(sql, (err,results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })

    }
}