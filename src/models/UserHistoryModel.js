const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
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
        testId: {
            type: String,
        },
        testTitle: {
            type: String,
        },
        date: {
            type: Date,
        },
        result: {
            type: resultSchema,
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
    appTest: {
        type: Boolean,
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
