const express = require('express')
const router = express.Router();
const { getAllPost, createPost } = require('../controllers/postController');

router.get('/', getAllPost);
router.post('/createPost', createPost)

module.exports = router;
