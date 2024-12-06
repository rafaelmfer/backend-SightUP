const express = require("express");
const cors = require("cors");

const {
    getTasks,
    getTests,
    getExercises,
} = require("../controllers/taskController");
const router = express.Router();

router.use(cors());
router.use(express.json());

router.route("/allTasks").get(getTasks);

router.route("/tests").get(getTests);

router.route("/exercise").get(getExercises);

module.exports = router;
