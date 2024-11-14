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
    category: {
        type: String,
    },
    exerciseName: {
        type: String,
    },
    exerciseTime: {
        type: Date,
        default: Date.now,
    },
    done: {
        type: Boolean,
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
