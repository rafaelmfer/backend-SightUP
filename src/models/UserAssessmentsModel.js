const mongoose = require("mongoose");

const dailyCheckInfo = new mongoose.Schema({
    visionStatus: {
        type: String,
    },
    condition: {
        type: [String],
    },
    causes: {
        type: [String],
    },
    infoTime: {
        type: Date,
        default: Date.now,
    },
    done: {
        type: Boolean,
    },
});

const dailyExerciseInfo = new mongoose.Schema({
    eyesNow: {
        type: String,
    },
    taskId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    motivation: {
        type: String,
        required: true,
    },
    timeSchedule: {
        type: String, // "HH:MM"
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    eyeCondition: {
        type: [String],
        required: true,
    },
    advice: {
        type: String,
        required: true,
    },
    imageInstruction: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    finishTitle: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
});

const dailyAssessmentSchema = new mongoose.Schema({
    exerciseFelling: {
        type: String,
    },
    dailyCheckDate: {
        type: String,
        default: function () {
            const now = new Date();
            return now.toISOString().substring(0, 10);
        },
    },
    email: {
        type: String,
        required: true,
    },
    dailyCheckInfo: {
        type: dailyCheckInfo,
    },
    dailyExerciseInfo: [dailyExerciseInfo],
});

const Daily = mongoose.model("Assessments", dailyAssessmentSchema);

module.exports = {
    Daily,
};
