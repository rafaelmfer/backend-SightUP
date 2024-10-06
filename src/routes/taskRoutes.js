const express = require("express");
const cors = require("cors");
//const { authenticateJWT } = require("../controllers/AuthController");

const { getTasks, getTests } = require("../controllers/taskController");
const router = express.Router();

router.use(cors());
router.use(express.json());

// router.route("/api/tasks").get(authenticateJWT, getTasks);
router.route("/allTasks").get(getTasks);

router.route("/tests").get(getTests);

module.exports = router;
