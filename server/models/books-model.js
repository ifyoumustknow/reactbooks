const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books = new Schema(
    {
        name: { type: String, required: true },
        author: { type: [String], required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('books', Books)