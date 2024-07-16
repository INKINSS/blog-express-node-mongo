const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    }
});

const detailtSchema = new Schema({
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
    introduction: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        required: true,
        trim: true
    },
});

const contentSchema = new Schema({
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
        required: true,
        trim: true
    },
    content_2: {
        type: String,
        required: true,
        trim: true
    },
    title_content_3: {
        type: String,
        required: true,
        trim: true
    },
    content_3: {
        type: String,
        required: true,
        trim: true
    },
    title_content_4: {
        type: String,
        required: true,
        trim: true
    },
    content_4: {
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

const postSchema = new Schema({
    id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true,
        unique: true
    },
    user: {
        type: userSchema,
        required: true
    },
    detail: {
        type: detailtSchema,
        required: true
    },
    content: {
        type: contentSchema,
        required: true
    }
});

postSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
