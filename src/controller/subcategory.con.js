
const categoryModel = require("../models/category.schema")
const subCategoryModel = require("../models/subcategory.schema")

const subCatController = {
    create: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.create(req.body)
            res.redirect('back')
        } catch (error) {
            console.log(error)   
        }
    },
    get: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.find({}).populate('categoryID')
            console.log(subcategory);
            res.render('Pages/subcategory', { subcategories: subcategory })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const categoryData = await categoryModel.find({})
            res.render('Pages/addsubcategory', { categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = subCatController