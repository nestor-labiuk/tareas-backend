const { isValidObjectId } = require('mongoose')
const Authors = require('../models/Author')


const getAllAuthors = async(req, res) => {
    const authors = await Authors.find({})

    if(!authors){
        res.status(204).json({message: 'There are no authors'})
    }
    res.json({message: 'Successful returned authors', authors})
}
const getAuthorById = async (req, res ) => {
    const {id} = req.params
    if (!isValidObjectId(id)){
        return res.json({message: 'Invalid author'})
    }
    const author = await Authors.findById(id)
    if(!author){
        return res.json({
            message: 'Author not found'
        })
    }
    res.status(200).json({
        message:'Successful returned author',
        author
    })
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
    const author = await Authors.findByIdAndDelete(id)
    res.status(200).json({message: `El autor ${author.firstName} ${author.lastName} fue eliminado`})
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor

}
