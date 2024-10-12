const express = require("express");
const cors = require("cors");

const {
    getNotification,
    postNotification,
} = require("../controllers/UserNotificationController");
const router = express.Router();
router.use(cors());
router.use(express.json());

router.route("/getNotification").get(getNotification);
router.route("/postNotification").post(postNotification);


module.exports = router;
