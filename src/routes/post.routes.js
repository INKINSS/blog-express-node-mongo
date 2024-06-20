const express = require('express')
const router = express.Router();
const { getAllPost } = require('../controllers/postController');
const { validateContent } = require('../middleware/post')

router.get('/', validateContent, getAllPost)

module.exports = router;
