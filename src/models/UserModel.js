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
}, { _id: false });

const glassesSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
}, { _id: false });

const contactLensSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
}, { _id: false });

const eyeWearSchema = new mongoose.Schema({
    glasses: {
        type: glassesSchema,
    },
    contactLens: {
        type: contactLensSchema,
    },
}, { _id: false });

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
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: false,
        },
        birthday: {
            type: Number,
            required: false,
        },
        preferences: {
            type: preferenceSchema,
        },
        eyeWear: {
            type: eyeWearSchema,
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
