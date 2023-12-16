const express = require('express')
const booksRouter = require('./routes/books.routes')
const authorsRouter = require('./routes/authors.routes')

const app = express()

app.set('PORT', 3000)
app.use(express.json())

app.use('/api/authors', authorsRouter)
app.use('/api/books', booksRouter )

module.exports = app
    