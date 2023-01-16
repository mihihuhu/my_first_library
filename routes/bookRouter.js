// import books
const bookController = require('../controllers/bookController.js')


// router
const router = require('express').Router()

router.post('/addBook', bookController.addBook)

router.get('/allBooks', bookController.getAllBooks)


// Products router
router.get('/:id', bookController.getOneBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

module.exports = router