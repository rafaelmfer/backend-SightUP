const express = require("express");
const cors = require("cors");
//const { authenticateJWT } = require("../controllers/AuthController");

const {
    getUser,
    updatePrescription,
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
    saveTestResult,
    getUserTests,
} = require("../controllers/userController");
const router = express.Router();

router.use(cors());
router.use(express.json());

router.route("/:userIdentifier").get(getUser);

router.route("/prescriptions").post(updatePrescription);

router.route("/setupProfile").post(setupProfile);

router.route("/dailyCheck").post(setupDailyCheck);

router.route("/dailyCheckInfo").get(getDailyCheckInfo);

router.route("/visionHistory").post(saveTestResult);

router.route("/visionHistory/:user").get(getUserTests);

module.exports = router;
