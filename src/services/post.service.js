const PostModal = require('../modals/post.modal');
const fileService = require('../helpers/fileService');

class PostService {
    async create(post, picture) {
        console.log(picture);
        const fileName = fileService.saveFile(picture);
        const createdPost = await PostModal.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await PostModal.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await PostModal.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID');
        }
        const updatedPost = await PostModal.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await PostModal.findByIdAndDelete(id);
        return post;
    }
}

module.exports = new PostService();
