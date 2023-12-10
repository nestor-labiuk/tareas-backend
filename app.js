const express = require('express')
const app = express()

app.set('PORT', 3000)
app.use(express.json())

let authors = [
    { id: 1, firstName: 'Jane', lastName: 'Doe' },
    { id: 2, firstName: 'Paco', lastName: 'Pérez' },
    { id: 3, firstName: 'Pepe', lastName: 'Gómez' }
]

let books = [
    { id: 1, book: 'Jerry Potter', authorId: 1 },
    { id: 2, book: 'The Spanish', authorId: 2 },
    { id: 3, book: 'Zarzuela', authorId: 3 }
]

const getAllAuthors = (req, res) => {
    res.status(200).send(authors)
}

const getAuthorById = (req, res) => {
    const {id} = req.params
    const author = authors.find(author => author.id === +id)
    res.status(200).json(author)
    
}

const createAuthor = (req, res) => {
    const {id, firstName, lastName} = req.body
    authors.push({id, firstName, lastName})
    res.status(201).send('Author created')
}

const updateAuthor = (req, res) => {
    const {id} = req.params
    const {firstName, lastName} = req.body
    const author = authors.find(author => author.id === +id)
    author.firstName = firstName 
    author.lastName = lastName 
    res.send('Author updated')
}

const deleteAuthor = (req, res) => {
    const {id} = req.params
    authors = authors.filter(author => author.id !== +id)
    res.send('Deleting author')
}

const getAllBooks = (req, res) => {
    res.status(200).send(books)
}

const getBookById = (req, res) => {
    const {id} = req.params
    const book = books.find(book => book.id === +id)
    res.status(200).json(book)
}

const createBook = (req, res) => {
    const {id, book, authorId} = req.body
    books.push({id, book, authorId})
    res.status(201).send('Book created')
}

const updateBook = (req, res) => {
    const {id} = req.params
    const {book, authorId} = req.body
    const miBook = books.find(itemBook => itemBook.id === +id)
    miBook.book = book  
    miBook.authorId = authorId 
    res.send('Author updated')
}

const deleteBook = (req, res) => {
    const {id} = req.params
    books = books.filter(item => item.id !== +id)
    res.send('Deleting author')
}

// Rutas aqui ---
app.get('/api/authors', getAllAuthors) 
app.get('/api/author/:id', getAuthorById) 
app.post('/api/createAuthors', createAuthor) 
app.put('/api/author/:id', updateAuthor) 
app.delete('/api/author/:id', deleteAuthor) 
app.get('/api/books', getAllBooks) 
app.get('/api/book/:id', getBookById) 
app.post('/api/createBook', createBook) 
app.put('/api/book/:id', updateBook) 
app.delete('/api/book/:id', deleteBook) 
// Rutas aqui ---

module.exports = {
    app,
    // createAuthor,
    // createBook,
    // deleteAuthor,
    // deleteBook,
    // getAllAuthors,
    // getAllBooks,
    // getAuthorById,
    // getBookById,
    // updateAuthor,
    // updateBook,
}
