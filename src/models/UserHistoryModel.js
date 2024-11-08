const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        testId: {
            type: String,
        },
        testType: {
            type: String,
        },
        left: {
            type: String,
        },
        right: {
            type: String,
        },
    },
    { _id: false }
);

const testSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
        },
        appTest: {
            type: Boolean,
        },
        result: {
            type: [resultSchema],
        },
    },
    { _id: false }
);

const userHistorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    tests: {
        type: [testSchema],
        default: [],
    },
});

const UserHistory = mongoose.model("UserHistory", userHistorySchema);

module.exports = {
    UserHistory,
};
