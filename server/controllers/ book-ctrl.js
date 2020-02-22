/* eslint-disable no-undef */
const Books = require('../models/books-model').default

createBooks = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const books = new Books(body)

    if (!books) {
        return res.status(400).json({ success: false, error: err })
    }

    books
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: books._id,
                message: 'Books created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Books not created!',
            })
        })
}

updateBooks = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Books.findOne({ _id: req.params.id }, (err, books) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Book not found!',
            })
        }
        books.Title = body.Title
        books.Author = body.Author
        books.Description = body.Description
        books.Image = body.Image
        books.Link = body.Link
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: books._id,
                    message: 'Books updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Books not updated!',
                })
            })
    })
}

deleteBooks = async (req, res) => {
    await books.findOneAndDelete({ _id: req.params.id }, (err, books) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!books) {
            return res
                .status(404)
                .json({ success: false, error: `book not found` })
        }

        return res.status(200).json({ success: true, data: books })
    }).catch(err => console.log(err))
}

getBooksById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, books) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!books) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: books })
    }).catch(err => console.log(err))
}

getBooks = async (req, res) => {
    await Books.find({}, (err, Books) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movBooksies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: Books })
    }).catch(err => console.log(err))
}

module.exports = {
    createBooks,
    updateBooks,
    deleteBooks,
    getBooks,
    getBooksById,
}