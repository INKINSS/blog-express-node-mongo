const Post = require('../models/blog')

const getAllPost = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el psot',
            error: error.message
        })
    }
}

const createPost = async (req, res) => {
    try {
        const { title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, conclution } = req.body;
        const post = new Post({ title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, conclution });
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: 'hubo un problema al crear el post' + error })
    };
}

const updatePost = async (req, res) => {
    try {
        const { id, title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, conclution } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id,
            { id, title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, conclution },
            { new: true })
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: 'Hubo un problema al actualizar el post: ' + error })
    }
}


const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: 'hubo un problema al eliminar el post' + error })
    };
}

module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost
}