const express = require('express')
const bookCtrl = require('../controllers/book-ctrl')
const router = express.Router()

router.post('/book', bookCtrl.createBooks)
router.put('/book/:id', bookCtrl.updateBooks)
router.delete('/book/:id', bookCtrl.deleteBooks)
router.get('/book/:id', bookCtrl.getBooksById)
router.get('/books', bookCtrl.getBooks)

module.exports = router