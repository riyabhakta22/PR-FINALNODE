
const {Router} = require('express')
const productController = require('../controller/product.con')

const productRouter = Router()

productRouter.post('/', productController.create)
productRouter.get('/', productController.get)

module.exports = productRouter