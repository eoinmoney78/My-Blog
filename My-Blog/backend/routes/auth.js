// const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// //REGISTER
// router.post("/register", async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPass = await bcrypt.hash(req.body.password, salt);
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPass,
//         });

//         const user = await newUser.save();
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username });
//         if (!user) return res.status(400).json("Wrong credentials!");

//         const validated = await bcrypt.compare(req.body.password, user.password);
//         if (!validated) return res.status(400).json("Wrong credentials!");

//         const { password, ...others } = user._doc;
//         res.status(200).json(others);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        // Validate request data (simple example - consider a library like `joi` for more comprehensive validation)
        if (!req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).json({ message: "Required field missing" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();

        // Return without password
        const { password, ...others } = user._doc;
        res.status(201).json(others); // 201 Created is more appropriate for a successful registration
    } catch (err) {
        res.status(500).json({ message: "Error registering user" });
    }
});

router.post("/login", async (req, res) => {
    try {
        // Validate request data
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: "Required field missing" });
        }

        const user = await User.findOne({ username: req.body.username });

        // Using the same message for both cases to not reveal specifics
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) return res.status(400).json({ message: "Invalid credentials" });

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;
