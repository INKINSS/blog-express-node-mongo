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

const createPost = async (req, res) => {
    try {
        const { title, description, tags, introduction, title_content_1, content_1, title_cotent_2, content_2, conclution } = req.body;
        const post = new Post({ title, description, tags, introduction, title_content_1, content_1, title_cotent_2, content_2, conclution });
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: 'hubo un problema al crear el post' + error })
    };

}

module.exports = {
    getAllPost,
    createPost
}