const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const postSchema = new Schema({
    card_information: {
        title: {
            type: String,
            required: true,
            maxlength: 10,
            minlength: 5,
        },
        description: {
            type: String,
            required: true,
            minlength: 30,
            maxlength: 40
        },
        tags: {
            type: [String],
            required: true,
            minlength: 1,
            maxlength: 3
        },
    },
    publication: {
        content: {
            introduction: {
                type: String,
                required: true,
                minlength: 30,
                maxlength: 80
            },
            body: {
                content: {
                    type: String,
                    required: true,
                    minlength: 30,
                    maxlength: 1000
                },
                content: {
                    type: String,
                    required: true,
                    minlength: 30,
                    maxlength: 1000
                },
                content: {
                    type: String,
                    required: true,
                    minlength: 30,
                    maxlength: 1000
                },
                content: {
                    type: String,
                    required: false,
                    minlength: 30,
                    maxlength: 1000
                },
                content: {
                    type: String,
                    required: false,
                    minlength: 30,
                    maxlength: 1000
                },
                content: {
                    type: String,
                    required: false,
                    minlength: 30,
                    maxlength: 1000
                },
                conclution: {
                    type: String,
                    required: true,
                    minlength: 30,
                    maxlength: 1000
                }
            }
        },
        date: {
            type: Date,
            default: Date.now
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author'
        }
    },
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;