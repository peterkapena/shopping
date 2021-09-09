const express = require('express')
const router = express.Router()
const {
    getAllProductById,
    getAllProducts
} = require('../controller/productControllers')

/**
 * @description GET all products from db
 * @route GET /api/products
 * @access Public
 */
router.get('/', getAllProducts)

/**
 * @description GET a product by id from db
 * @route GET /api/products
 * @access Public
 */
router.get('/:id', getAllProductById)

module.exports = router