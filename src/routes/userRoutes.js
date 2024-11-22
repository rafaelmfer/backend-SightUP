const express = require("express");
const cors = require("cors");
const { authenticateJWT } = require("../controllers/AuthController");

const {
    getUser,
    updatePrescription,
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
    getDailyExercises,
    updateDailyExercise,
    saveTestResult,
    getUserTests,
} = require("../controllers/userController");
const router = express.Router();

router.use(cors());
router.use(express.json());

router.route("/info/:userIdentifier").get(authenticateJWT, getUser);

router.route("/prescriptions").post(authenticateJWT, updatePrescription);

router.route("/setupProfile").post(authenticateJWT, setupProfile);

router.route("/dailyCheck").post(authenticateJWT, setupDailyCheck);

router.route("/dailyCheckInfo").post(authenticateJWT, getDailyCheckInfo);

router
    .route("/dailyExercises/:userIdentifier")
    .get(authenticateJWT, getDailyExercises);

router
    .route("/dailyExercises/:userIdentifier/:exerciseId")
    .put(authenticateJWT, updateDailyExercise);

router.route("/visionHistory").post(authenticateJWT, saveTestResult);

router.route("/visionHistory/:user").get(authenticateJWT, getUserTests);

module.exports = router;
