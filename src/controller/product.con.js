
const productModel = require("../models/product.schema");
const productController = {
    create: async (req, res) => {
        try {
            const product = await productModel.create(req.body)
            res.send(product)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const product = await productModel.find({}).populate({
                path: 'subCategoryID',
                populate: {
                    path: 'categoryID'
                }
            })
            res.render('Pages/products', { products: product })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController