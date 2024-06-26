const router = require("express").Router()
const { faker } = require ("@faker-js/faker")
const Products = require("../model/product.model.js")

//get de todos los productos
router.get("/products", async (req, res) => {
    const products = await Products.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: products
    })
})

//get de fitrado por id
router.get("/products/:product_id",async (req, res) => {
    const id = req.params.product_id
    const product = await Products.findOne({
            where: {
                product_id: id
            }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: product
    })
})

//post para crear el producto
router.post("/products", async (req, res) => {
    const dataProducts = req.body
    await Products.sync()
    const createProduct = await Products.create({
        product_name: dataProducts.product_name,
        price: dataProducts.price,
        is_stock: dataProducts.is_stock
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Product"
    })
})

//put para actualizar los productos
router.put("/products/:product_id", async (req, res) => {
    const id = req.params.product_id
    const dataProducts = req.body
    const updateProduct = await Products.update({
        product_name: dataProducts.product_name,
        price: dataProducts.price,
        is_stock: dataProducts.is_stock
    }, {
        where: {
            product_id: id,
        }
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: updateProduct
    })
})

//delete para borrarlos por medio de su id
router.delete("/products/:product_id", async (req, res) => {
    const id = req.params.product_id
    const deleteProduct = await Products.destroy({
        where: {
            product_id: id
        }
    })
    res.status(200).json({
        ok: true,
        status: 204,
        message: deleteProduct
    })
})

module.exports = router