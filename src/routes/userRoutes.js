const express = require("express");
const cors = require("cors");
//const { authenticateJWT } = require("../controllers/AuthController");

const {
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
    saveTestResult,
    getUserTests,
} = require("../controllers/userController");
const router = express.Router();

router.use(cors());
router.use(express.json());

router.route("/setupProfile").post(setupProfile);

router.route("/dailyCheck").post(setupDailyCheck);

router.route("/dailyCheckInfo").get(getDailyCheckInfo);

router.route("/visionHistory").post(saveTestResult);

router.get("/visionHistory/:user", getUserTests);

module.exports = router;
