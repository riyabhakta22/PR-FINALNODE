
const { Router } = require('express')
const categoryController = require('../controller/category.con')

const categoryRouter = Router()

categoryRouter.post('/create', categoryController.create)
categoryRouter.get('/', categoryController.get)
categoryRouter.get('/create', categoryController.form)

module.exports = categoryRouter