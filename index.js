const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./src/routers/posts.router');
const uploadFile = require('express-fileupload');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.static('static'));
app.use(uploadFile({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();
