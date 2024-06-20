const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        required: true,
        trim: true
    },
    introduction: {
        type: String,
        required: true,
        trim: true
    },
    title_content_1: {
        type: String,
        required: true,
        trim: true
    },
    content_1: {
        type: String,
        required: true,
        trim: true
    },
    title_content_2: {
        type: String,
        require: true,
        trim: true
    },
    content_2: {
        type: String,
        required: true,
        trim: true
    },
    conclution: {
        type: String,
        required: true,
        trim: true
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;