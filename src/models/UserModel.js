const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema(
    {
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
    },
    { _id: false }
);

const prescriptionInfoSchema = new mongoose.Schema(
    {
        testType: { type: String, required: true },
        left: { type: String, required: true },
        right: { type: String, required: true },
    },
    { _id: false }
);

const prescriptionSchema = new mongoose.Schema(
    {
        appTest: { type: Boolean, required: true },
        prescriptionDate: { type: Date, required: true },
        manufacturer: { type: String, default: null },
        productName: { type: String, default: null },
        replacement: { type: String, default: null },
        prescriptionInfo: { type: [prescriptionInfoSchema], required: true },
        notes: { type: String, default: null },
    },
    { _id: false }
);

const eyeWearSchema = new mongoose.Schema(
    {
        glasses: {
            type: prescriptionSchema,
        },
        contactLens: {
            type: prescriptionSchema,
        },
    },
    { _id: false }
);

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            default: function () {
                return new mongoose.Types.ObjectId(); // Generates ObjectId by default
            },
        },
        userName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        hashPassword: {
            type: String,
        },
        gender: {
            type: String,
        },
        birthday: {
            type: String,
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
