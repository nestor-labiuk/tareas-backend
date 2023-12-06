const express = require('express');
const app = express();

app.set('PORT', 3000)
app.use(express.json());

// Datos mockeados (para simular una base de datos)
let authors = [
    // { id: 1, firstName: 'Jane', lastName: 'Doe' }
];

let books = [
    // { id: 1, book: 'Jerry Potter', authorId: 1 }
];

const getAllAuthors = (req, res) => {
    // Codigo para obtener todos los autores
}

const getAuthorById = (req, res) => {
    // Codigo para obtener todos los autores
}

const createAuthor = (req, res) => {
    // Codigo para obtener todos los autores
}

const updateAuthor = (req, res) => {
    // Codigo para obtener todos los autores
}

const deleteAuthor = (req, res) => {
    // Codigo para obtener todos los autores
}

const getAllBooks = (req, res) => {
    // Codigo para obtener todos los autores
}

const getBookById = (req, res) => {
    // Codigo para obtener todos los autores
}

const createBook = (req, res) => {
    // Codigo para obtener todos los autores
}

const updateBook = (req, res) => {
    // Codigo para obtener todos los autores
}

const deleteBook = (req, res) => {
    // Codigo para obtener todos los autores
}

// Rutas aqui ---
// ...
// Rutas aqui ---

module.exports = {
    app,
    createAuthor,
    createBook,
    deleteAuthor,
    deleteBook,
    getAllAuthors,
    getAllBooks,
    getAuthorById,
    getBookById,
    updateAuthor,
    updateBook,
}