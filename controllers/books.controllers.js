const { books } = require ('../data/db')


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
    // books = books.filter(item => item.id !== +id)
    console.log(id)
    res.send('Deleting author')
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook

}
