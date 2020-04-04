const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000

const app = express()

app.use(bodyParser())
app.use(cors())

app.get('/', (req,res) => {
    res.status(200).send('<h1>Welcome My Api</h1>')
})

const {productRouter,userRouter} = require('./router')
app.use(productRouter)
app.use(userRouter)

app.listen(port, () => console.log('API ACTITIVE AT PORT ' + port))