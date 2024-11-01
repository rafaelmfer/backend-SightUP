const express = require("express");
const cors = require("cors");
//const { authenticateJWT } = require("../controllers/AuthController");

const {
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
} = require("../controllers/userController");
const router = express.Router();

router.use(cors());
router.use(express.json());

router.route("/setupProfile").post(setupProfile);

router.route("/dailyCheck").post(setupDailyCheck);

router.route("/dailyCheckInfo").get(getDailyCheckInfo);

module.exports = router;
