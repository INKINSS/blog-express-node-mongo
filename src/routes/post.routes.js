const express = require('express')
const router = express.Router();
const { getAllPost, createPost, deletePost, updatePost } = require('../controllers/postController');

router.get('/', getAllPost);
router.post('/createPost', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router;
