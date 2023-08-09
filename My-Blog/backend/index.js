require('dotenv').config();
const express = require("express");

const app = express();

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const path = require("path");
const PORT = process.env.PORT || 5002;
const cors = require('cors');
const { db } = require('../backend/middleware/db');
const cloudinary = require('./cloudinaryConfig');




app.use(express.json());
app.use('/static', express.static('public'));

app.use(cors());

app.post('/image/upload', upload.single('image'), (req, res) => {
    // req.file is the 'image' file

    // Upload the image to Cloudinary
    cloudinary.uploader.upload(req.file.path, (error, result) => {
        if (error) {
            console.error('Upload error:', error);
            res.status(500).json({ message: 'Error uploading image to Cloudinary.' });
        } else {
            console.log('Upload result:', result);
            res.status(200).json({ imageUrl: result.secure_url });
        }
    });
});







app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

const server = async () => {
    db();
    app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
};

server();