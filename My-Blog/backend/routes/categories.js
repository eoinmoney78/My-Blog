const router = require("express").Router();
const Category = require("../models/Category");
const jwt = require("jsonwebtoken");

const JWT = process.env.JWT;
// Middleware to authenticate users
const validate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "A token is required for authentication" });

    jwt.verify(token, JWT, (err, user) => {
        if (err) return res.status(403).json({ error: "Token is not valid" });
        req.user = user;
        next();
    });
};

router.post("/", validate, async (req, res) => {
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

router.get("/", validate, async (req, res) => {
    try {
        const category = await Category.find();
        const count = category.length;
        res.status(200).json({ count, category });
    } catch (err) {
        console.error("Error when fetching categories:", err);
        res.status(500).json({ message: "Error when fetching categories", error: err.message });
    }
});



module.exports = router;
