const Post = require('../modals/post.modal');

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body;
            const post = await Post.create({
                author,
                title,
                content,
                picture,
            });

            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new PostController();
