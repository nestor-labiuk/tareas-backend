const express = require('express')
const booksRouter = require('./routes/books.routes')
<<<<<<< HEAD
const authorsRouter = require('./routes/authors.routes')

=======
const { default: mongoose } = require('mongoose')
>>>>>>> 027498a (crea coneccion a db mongo con mongoose)
const app = express()

app.set('PORT', 3000)
app.use(express.json())

app.use('/api/authors', authorsRouter)
app.use('/api/books', booksRouter )

<<<<<<< HEAD
module.exports = app
=======
mongoose.connect('mongodb+srv://rolling-task:p5bYqP7vpbjsfkEe@cluster0.3b99w5r.mongodb.net/rolling-back-task?retryWrites=true&w=majority')
    .then(() => console.log('Connecting to Mongo'))
    .catch(() => console.log('Not connecting ') )

module.exports = {app}
>>>>>>> 027498a (crea coneccion a db mongo con mongoose)
    