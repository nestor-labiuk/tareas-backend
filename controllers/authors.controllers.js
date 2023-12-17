<<<<<<< HEAD
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
=======
const Authors = require('../models/Author')

const getAllAuthors = async(req, res) => {
    const authors = await Authors.find({})
    res.status(200).json({authors})
>>>>>>> 44e0830 (Adapta authors.controllers  para conectarse con dbMongo , y acomoda el código de los modelos)
}

const getAuthorById = async (req, res) => {
    const {id} = req.params
    const author = await Authors.findById(id)
    res.status(200).json(author)
  
}

const createAuthor = async (req, res) => {
    const {firstName, lastName} = req.body
    const author = new Authors({firstName, lastName})
    await author.save()

    res.status(200).json({message: `El autor ${firstName} ${lastName} fue creado`})
}

const updateAuthor = async (req, res) => {
    const {id} = req.params
    const {firstName, lastName} = req.body
    await Authors.findByIdAndUpdate({_id: id}, {firstName: firstName, lastName: lastName})
    res.send({messge: 'El autor fue actualizado'})
}

const deleteAuthor = async (req, res) => {
    const {id} = req.params
<<<<<<< HEAD
    // authors = authors.filter(author => author.id !== +id)
    console.log(id)
    res.send('Deleting author')
=======
    const author = await Authors.findByIdAndDelete(id)
    res.status(200).json({message: `El autor ${author.firstName} ${author.lastName} fue eliminado`})
>>>>>>> 44e0830 (Adapta authors.controllers  para conectarse con dbMongo , y acomoda el código de los modelos)
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor

}
