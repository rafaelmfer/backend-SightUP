const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
    goal: {
        type: String,
    },
    frequency: {
        type: String,
    },
    eyeCorrection: {
        type: [String],
    },
    unit: {
        type: String,
    },
});

const glassesSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
});

const contactLensSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
});

const eyeWearSchema = new mongoose.Schema({
    glasses: {
        type: glassesSchema,
    },
    contactLens: {
        type: contactLensSchema,
    },
});

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            default: function () {
                return new mongoose.Types.ObjectId(); // Generates ObjectId by default
            },
        },
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
        },
        lastName: {
            type: String,
        },
        gender: {
            type: String,
        },
        birthday: {
            type: Number,
        },
        preferences: {
            type: preferenceSchema,
        },
        eyeWear: {
            type: eyeWearSchema,
        },
        userName: {
            type: String,
            required: true,
        },
    },
    { collection: "users" }
);

userSchema.methods.comparePassword = (password, hashPassword) =>
    bcrypt.compareSync(password, hashPassword);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
};
