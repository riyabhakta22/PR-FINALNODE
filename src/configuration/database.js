 
const mongoose = require('mongoose')

const url = 'mongodb+srv://riyabhakta22:1122@cluster0.2i40hnl.mongodb.net/'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;