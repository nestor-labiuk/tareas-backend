const authorsRouter = require('express').Router
const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } = require('../controllers/authors.controllers')


authorsRouter.get('/', getAllAuthors)
authorsRouter.get('/:id', getAuthorById)
authorsRouter.post('/', createAuthor)
authorsRouter.patch('/:id', updateAuthor)
authorsRouter.delete('/:id', deleteAuthor)

module.exports = authorsRouter
