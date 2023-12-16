<<<<<<< HEAD
const { authors } = require ('../data/db.json')

const getAllAuthors = (req, res) => {
    res.status(200).send(authors)
    console.log(authors)
=======
// let authors = [
//     { id: 1, firstName: 'Jane', lastName: 'Doe' },
//     { id: 2, firstName: 'Paco', lastName: 'Pérez' },
//     { id: 3, firstName: 'Pepe', lastName: 'Gómez' }
// ]

const Courses = require('../models/Author')

const getAllAuthors = async(req, res) => {
    const courses = await Courses.find({})
    res.status(200).json({Courses})
>>>>>>> 027498a (crea coneccion a db mongo con mongoose)
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
    // authors = authors.filter(author => author.id !== +id)
    console.log(id)
    res.send('Deleting author')
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor

}
