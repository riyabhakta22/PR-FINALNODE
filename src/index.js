

const express = require('express');
const dbConnection = require('./configuration/database');
const categoryRouter = require('./routers/category.router');
const subCatRouter = require('./routers/subCategory.router');
const productRouter = require('./routers/product.router');
const categoryModel = require('./models/category.schema');
const app = express()

// port
const PORT = 4000;

// Connect to the database
dbConnection()

// Set up view engine and views directory
app.set('view engine', 'ejs')
app.set('views', 'views')

// Set up the public folder to serve static files
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', categoryRouter)
app.use('/subcategory', subCatRouter)
app.use('/product', productRouter)

app.get('/', (req, res) => {
    res.render('Pages/home')
})

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})