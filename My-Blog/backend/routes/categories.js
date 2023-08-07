// const router = require("express").Router();
// const Category = require("../models/Category");

// router.post("/", async (req, res) => {
//     const newCat = new Category(req.body);
//     try {
//         const savedCat = await newCat.save();
//         res.status(200).json(savedCat);
//     } catch (err) {
//         res.status(500).json(err.message);
//     }
// });

// router.get("/", async (req, res) => {
//     try {
//         const cats = await Category.find();
//         res.status(200).json(cats);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;

const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
    console.log("Received request body:", req.body);  // Logging the received request body
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        console.error("Error when saving category:", err);  // Logging the error when saving
        res.status(500).json(err.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        console.error("Error when fetching categories:", err);  // Logging the error when fetching
        res.status(500).json(err);
    }
});

module.exports = router;
