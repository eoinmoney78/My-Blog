const router = require("express").Router();

const Post = require("../models/Post");
const jwt = require("jsonwebtoken");

const JWT = process.env.JWT;

// A middleware to authenticate users
const validate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "A token is required for authentication" });

    jwt.verify(token, JWT, (err, user) => {
        if (err) return res.status(403).json({ error: "Token is not valid" });
        req.user = user;
        next();
    });
};


//CREATE POST
router.post("/", validate, async (req, res) => {
    console.log("Creating post with data:", req.body);
    console.log("Username from JWT:", req.user.username);
    console.log('User from token:', req.user);
    const newPost = new Post({
        ...req.body,
        username: req.user.username
    });
    console.log('New Post:', newPost);
    try {
        const savedPost = await newPost.save();
        console.log("Post created successfully:", savedPost);
        res.status(200).json(savedPost);
    } catch (err) {
        console.error("Error while creating post:", err);
        res.status(500).json(err);
    }
});

//UPDATE POST
router.put("/:id", validate, async (req, res) => {
    console.log("Updating post with ID:", req.params.id);
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.user.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                console.log("Post updated successfully:", updatedPost);
                res.status(200).json(updatedPost);
            } catch (err) {
                console.error("Error while updating post:", err);
                res.status(500).json(err);
            }
        } else {
            console.warn("Unauthorized attempt to update post");
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        console.error("Error while processing update post:", err);
        res.status(500).json(err);
    }
});


//DELETE POST
router.delete("/:id", validate, async (req, res) => {
    console.log("Request to delete post with ID:", req.params.id);
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.user.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                console.log("Post deleted successfully");
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                console.error("Error while deleting post:", err);
                res.status(500).json(err.message);
            }
        } else {
            console.warn("Unauthorized attempt to delete post");
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        console.error("Error while processing delete request for post:", err);
        res.status(500).json(err.message);
    }
});

//GET POST
router.get("/:id", async (req, res) => {
    console.log("Fetching post with ID:", req.params.id);
    try {
        const post = await Post.findById(req.params.id);
        console.log("Post fetched successfully:", post);
        res.status(200).json(post);
    } catch (err) {
        console.error("Error while fetching post:", err);
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    console.log("Fetching all posts with query:", req.query);
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }

        const postCount = posts.length;
        console.log(`Fetched ${postCount} posts.`, posts);
        res.status(200).json({
            message: `Successfully fetched ${postCount} posts.`,
            data: posts
        });
    } catch (err) {
        console.error("Error while fetching all posts:", err);
        res.status(500).json(err);
    }
});



module.exports = router;
