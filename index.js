import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Post from './src/app/modals/Post.modal.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(express.json());

// main
app.get('/', (req, res) => {
    res.status(200).json('Server working..');
});

// posts
app.post('/posts', async (req, res) => {
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
});

app.get('/posts', async (req, res) => {
    res.status(200).json();
});

async function startApp() {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();
