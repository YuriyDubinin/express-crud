const Router = require('express');
const PostController = require('../controllers/post.controller');

const router = Router();

router.post('/posts', PostController.create);

router.get('/posts', () => {});

router.get('/posts/:id', () => {});

router.put('/posts', () => {});

router.delete('/posts', () => {});

module.exports = router;
