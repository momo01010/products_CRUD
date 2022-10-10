const { response } = require('express')
const { UUID } = require('sequelize')
const Products = require('../models/products.models')
const  uuid = require('uuid')


const getAllProducts = async( ) =>{ 
    const data = await Products.findAll() //? traer todas las peliculas
    return data

}






const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })

    return newProduct
}

// createMovie({
//     name: 'Pacific rim',
//     genre: 'action',
//     duration: 120,
//     releaseDate: '2022/05/05'
// })
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

const getProductsById = async(id) =>{ 
    const data = await Products.findOne({
        where: {
            id

        }
    }) 
    return data
}



const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id
        }
    })
    return response
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data
}



// getMoviesById('2f9339ea-cc52-46ec-82df-353744811c0a')
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    editProduct,
    deleteProduct

}