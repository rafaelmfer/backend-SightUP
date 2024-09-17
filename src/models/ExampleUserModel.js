const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const users = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        hashPassword: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

users.methods.comparePassword = (password, hashPassword) =>
    bcrypt.compareSync(password, hashPassword);

module.exports = mongoose.model("Users", users);
