const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    alias: {
        type: String,
        required: false,
        trim: true
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;