const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
    },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["test", "exercise"], required: true },
    testMode: {
        type: {
            touch: { type: String, required: true },
            voice: { type: String, required: true },
            smartwatch: { type: String, required: true },
        },
        required: function () {
            return this.type === "test";
        },
    },
    videoMode: {
        touch: {
            type: String,
            required: true,
        },
        voice: {
            type: String,
            required: true,
        },
        smartwatch: {
            type: String,
            required: true,
        },
    },
    videoEyes: {
        right: {
            type: String,
            required: true,
        },
        left: {
            type: String,
            required: true,
        },
    },
    checkList: {
        type: [String],
        required: function () {
            return this.type === "test";
        },
    },
    howItWorks: {
        type: [String],
        required: function () {
            return this.type === "test";
        },
    },
    video: {
        type: String,
        required: true,
    },
    images: { type: String },
    imageInstruction: { type: String },
    finishTitle: { type: String },
    advice: { type: String },
    duration: { type: Number },
    helps: { type: Array },
    category: { type: String },
    motivation: { type: String },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = {
    Task,
};
