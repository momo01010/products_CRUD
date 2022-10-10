const express = require('express')
const db = require('./utils/database')
const initModels = require ('./models/initModels')
const productsRouter = require('./products/products.router')
const app = express()

const config = require('./config')
const Products = require('./models/products.models')



db.authenticate()
    .then(() => console.log('DB Authentication succesfull'))
    .catch((err) => console.log(err))
    //? acccion informativa de si las credenciales son correctas


db.sync()
//? sincroniza los modelos con las base de datos, creadno las tablas
    .then(() => console.log('Databse synced'))
    .catch(err => console.log(err))

initModels()

app.use(express.json())

app.get('/', (res, req) => {
    res.statusCode(200).json({message: 'OK'})
})


app.use('/api/v1/products', productsRouter)


app.listen(config.port, () => {
    console.log(`Server started at ${config.port}`)
})