require('dotenv').config()

module.exports.config = {
    PORT: process.env.PORT || 5000,
    DATABASE: process.env.DATABASE || 'mongodb://127.0.0.1:27017/MernFreecodecapm'
}