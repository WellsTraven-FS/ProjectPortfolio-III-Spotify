const express = require("express");
const router = express.Router();
const Login = require("../models/login");

// RESTFULL API Endpoints

//Add User
router.post("/:id", async (req, res) => {
    const login = new Login({
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const newLogin = await login.save();
        res.status(201).json(newLogin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
