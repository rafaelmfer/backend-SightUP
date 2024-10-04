const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
    assessmentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId(); // Generates ObjectId by default
        },
    },
    status: {
        type: Boolean,
    },
    exerciseFeeling: {
        type: String,
    },
    dailyCheck: {
        type: Number,
    },
});

const userAssessmentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        date: {
            type: Date,
        },
        assessments: {
            type: assessmentSchema,
        },
    },
    { collection: "assessments", _id: false }
);

const userAssessment = mongoose.model("User", userAssessmentSchema);

module.exports = {
    userAssessment,
};
