const express = require('express')
const router = express.Router();
const { getAllPost, createPost, deletePost, updatePost, getPostById } = require('../controllers/postController');

router.get('/', getAllPost);
router.get('/article/:id', getPostById)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router;
