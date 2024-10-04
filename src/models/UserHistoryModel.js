const mongoose = require("mongoose");

const contactLensResultSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
    both: {
        type: String,
    },
});

const noGlassesResultSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
    both: {
        type: String,
    },
});

const glassesResultSchema = new mongoose.Schema({
    left: {
        type: String,
    },
    right: {
        type: String,
    },
    both: {
        type: String,
    },
});

const testSchema = new mongoose.Schema({
    testID: {
        type: Number,
    },
    testTitle: {
        type: String,
    },
    date: {
        type: Timestamp,
    },
    glassesResult: {
        type: glassesResultSchema,
    },
    noGlassesResult: {
        type: noGlassesResultSchema,
    },
    contactLensResult: {
        type: contactLensResultSchema,
    },
});

const userHistorieSchema = new mongoose.Schema({
    userID: {
        type: String,
    },
    tests: {
        type: [testSchema],
    },
});

const UserHistories = mongoose.model("User", userHistorieSchema);

module.exports = {
    UserHistories,
};
