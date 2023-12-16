<<<<<<< HEAD
const booksRouter = require('express').Router
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/books.controllers')


booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getBookById)
booksRouter.post('/', createBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)

module.exports = booksRouter


=======
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/books.controllers')

const booksRouter = require('express').Router()


booksRouter.get('/', getAllBooks) 
booksRouter.get('/:id', getBookById) 
booksRouter.post('/', createBook) 
booksRouter.put('/:id', updateBook) 
booksRouter.delete('/:id', deleteBook) 

module.exports = booksRouter
>>>>>>> c41eb02 (limpia archivo app.js y translsdo el codigo a los archivos de rutas y controladores de autores y libros)
