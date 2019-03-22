const express = require('express');
const router = express.Router();

const feedControllers = require('../controllers/feed');

router.get('/posts', feedControllers.getPosts);
router.post('/createPost', feedControllers.createPost);

module.exports = router;