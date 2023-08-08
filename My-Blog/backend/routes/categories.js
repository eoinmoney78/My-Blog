const router = require("express").Router();
const Category = require("../models/Category");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key_here";

// Middleware to authenticate users
const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "A token is required for authentication" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: "Token is not valid" });
        req.user = user;
        next();
    });
};

router.post("/", authenticate, async (req, res) => {
    console.log("Received request body:", req.body);

    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(201).json(savedCat);  // Using 201 for successful creation
    } catch (err) {
        console.error("Error when saving category:", err);
        res.status(500).json({ message: "Error when saving category", error: err.message });
    }
});

router.get("/", authenticate, async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        console.error("Error when fetching categories:", err);
        res.status(500).json({ message: "Error when fetching categories", error: err.message });
    }
});

module.exports = router;
