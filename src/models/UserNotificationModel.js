const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    notificationId: {
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId(); // Generates ObjectId by default
        },
    },
    assessmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "assessments",
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    dateToTrigger: {
        type: Date,
    },
});

const userNotification = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        token: {
            type: String,
        },
        listNotification: {
            type: [notificationSchema],
        },
    },
    { collection: "notifications", _id: false }
);

const UserNotification = mongoose.model("UserNotifications", userNotification);

module.exports = {
    UserNotification,
};
