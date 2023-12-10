const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    book: {type: 'string', required: true}
})

const book = mongoose.model('Book', bookSchema)

module.exports = book
