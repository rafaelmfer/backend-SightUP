const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["test", "exercise"], required: true }, // To distinguish between test or exercise

    testMode: {
        type: [String],
        enum: ["touch", "voice", "smartwatch"],
        required: function () {
            return this.type === "test";
        }, // Only retrieve for test
    },
    video: { type: String },
    images: { type: String },

    duration: {
        type: String,
    },
    exercise_instruction: {
        type: String,
    },
    short_description: {
        type: String,
    },
});

module.exports = mongoose.model("Task", taskSchema);
