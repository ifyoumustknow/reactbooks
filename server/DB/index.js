const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/reactbooks', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

// eslint-disable-next-line no-unused-vars
const db = mongoose.connection
