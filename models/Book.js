const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
