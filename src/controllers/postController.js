const Post = require('../models/blog');

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los posts',
            error: error.message
        });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema al obtener el post' });
    }
};

const createPost = async (req, res) => {
    try {
      const {
        username,
        nickname,
        publishDate,
        title,
        description,
        introduction,
        tags,
        title_content_1,
        content_1,
        title_content_2,
        content_2,
        title_content_3,
        content_3,
        title_content_4,
        content_4,
        conclution
      } = req.body;
  
      const post = new Post({
        user: { username, nickname, publishDate },
        detail: { title, description, introduction, tags },
        content: {
          title_content_1,
          content_1,
          title_content_2,
          content_2,
          title_content_3,
          content_3,
          title_content_4,
          content_4,
          conclution
        }
      });
  
      await post.save();
      return res.status(200).json(post);
    } catch (error) {
        console.log('hubo un error al hacer el post', error)
    }
  };

const updatePost = async (req, res) => {
    try {
        const { username, nickname, title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, title_content_3, content_3, title_content_4, content_4, title_content_5, content_5, conclusion } = req.body;

        const post = await Post.findByIdAndUpdate(req.params.id, {
            user: { username, nickname },
            content: { title, description, tags, introduction, title_content_1, content_1, title_content_2, content_2, title_content_3, content_3, title_content_4, content_4, title_content_5, content_5, conclusion }
        }, { new: true });

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema al actualizar el post', error: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema al eliminar el post', error: error.message });
    }
};

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
