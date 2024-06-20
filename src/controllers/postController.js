const Post = require('../models/blog')

const getAllPost = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: 'Error getting post',
            error: error.message
        })
    }
}

module.exports = {
    getAllPost
}