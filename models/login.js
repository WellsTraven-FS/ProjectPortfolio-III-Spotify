const mongoose = require("mongoose");
const validateEmail = (email) => {
    return /^\S+@\S+\.S+$/.test(email);
};

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: "Email is required",
        validate: [validateEmail, "Email Invalid"],
    },
    password: {
        type: String,
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Login", loginSchema);
