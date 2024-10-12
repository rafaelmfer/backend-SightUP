const mongoose = require('mongoose'); 
const { UserNotification } = require("../models/UserNotificationModel");

const postNotification = async (req, res) => {
    try {
        const { assessmentId, title, body, dateToTrigger, timeToTrigger } = req.body;

        const newNotificationId = new mongoose.Types.ObjectId(); 

        let userNotification = await UserNotification.findOne({ "listNotification.notificationId": newNotificationId });

        if (!userNotification) {
            userNotification = new UserNotification({
                userId: new mongoose.Types.ObjectId(), 
                listNotification: [], 
            });
        }

        const newNotification = {
            notificationId: newNotificationId,  
            assessmentId,
            title,
            body,
            dateToTrigger: new Date(dateToTrigger),
            timeToTrigger,
        };

        userNotification.listNotification.push(newNotification);

        await userNotification.save();

        return res.status(201).json({
            message: "Notification created successfully.",
            notification: newNotification
        });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred while creating the notification.", error: error.message });
    }
};




const getNotification = async (req, res) => {
    try {
        const { date } = req.body;

        if (!date) {
            return res.status(400).json({ message: "Date is required." });
        }

        const targetDate = new Date(date);
        targetDate.setHours(0, 0, 0, 0);  // Set time to the start of the day

        const userNotifications = await UserNotification.find({
            "listNotification.dateToTrigger": { $gte: targetDate, $lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000) }
        });

        const notifications = userNotifications
            .flatMap(user => user.listNotification)  
            .filter(notification => {
                const notificationDate = new Date(notification.dateToTrigger);
                notificationDate.setHours(0, 0, 0, 0);
                return notificationDate.getTime() === targetDate.getTime();  
            })
            .map(notification => ({
                title: notification.title,
                timeToTrigger: notification.timeToTrigger,
                body: notification.body,
            }));

        if (notifications.length === 0) {
            return res.status(404).json({ message: "No notifications found for the provided date." });
        }

        return res.status(200).json({
            message: "Notifications found.",
            data: notifications,
        });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred while fetching notifications.", error: error.message });
    }
};


module.exports = {
    postNotification,
    getNotification,
};
