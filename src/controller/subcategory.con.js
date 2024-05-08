
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
            res.render('Pages/subcategory/subcategory', { subcategories: subcategory })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const categoryData = await categoryModel.find({})
            res.render('Pages/addsubcategory/addsubcategory', { categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const subcategory = await subCategoryModel.findByIdAndDelete(id)
            res.redirect('/subcategory')
        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        const { id } = req.params
        try {
            const subcategory = await subCategoryModel.findById(id)
            const categoryData = await categoryModel.find({})
            res.render('Pages/subcategory/editsubcategory', { subcategory: subcategory, categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const { name, categoryID } = req.body
        try {
            const category = await subCategoryModel.findByIdAndUpdate(id, { name: name, categoryID: categoryID }, { new: true })
            res.redirect('/subcategory')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = subCatController