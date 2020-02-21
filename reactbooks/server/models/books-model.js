const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books = new Schema(

    {
        Title: { type: String, required: true },
        Authors: { type: String, required: true },
        Description: { type: String, required: true },
        Image: { type: String, required: true },
        Link: { type: String, required: true }
    },

    { timestamps: true },
)

module.exports = mongoose.model('books', books)