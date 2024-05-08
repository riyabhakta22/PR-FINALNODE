const categoryModel = require("../models/category.schema")


const categoryController = {
    create: async (req, res) => {
        try {
            const category = await categoryModel.create(req.body)
            res.redirect('back')
        } catch (error) {   
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const category = await categoryModel.find({})
            res.render('Pages/category', { categories: category })
        } catch (error) {
            console.log(error)
        }
    },
    form: (req, res) => {
        try {
            res.render('Pages/addcategory')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = categoryController