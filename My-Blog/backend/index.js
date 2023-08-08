const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

// const cors = require('cors');
dotenv.config();

app.use(express.json());
// app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose.connect(process.env.MONGO_URL, {

}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images"); // set the destination to the images folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // generate a unique filename using the current timestamp
    },
});

const upload = multer({ storage: storage });



app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
}, (error, req, res, next) => { // Error handling middleware
    res.status(400).json({ error: error.message });
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen("5000", () => {

    console.log("Backend is running on Port 5000")
});