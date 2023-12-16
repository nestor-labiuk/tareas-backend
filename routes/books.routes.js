const booksRouter = require('express').Router
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/books.controllers')


booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getBookById)
booksRouter.post('/', createBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)

module.exports = booksRouter


