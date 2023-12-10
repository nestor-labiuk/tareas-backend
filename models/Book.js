const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    book: {type: 'string', required: true}
})
