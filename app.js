const express = require('express')
require('dotenv').config()
const { mongoose } = require('mongoose')
const authorsRouter = require('./routes/authors.routes')
// const booksRouter = require('./routes/books.routes')

const app = express()

app.set('PORT', 3000)
app.use(express.json())

app.use('/api/authors', authorsRouter)
// app.use('/api/books', booksRouter )

mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('Connecting to Mongo'))
    .catch(() => console.log('Not connecting ') )

module.exports = {app}
    