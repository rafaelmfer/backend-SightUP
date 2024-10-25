const express = require("express");
const cors = require("cors");
//const { authenticateJWT } = require("../controllers/AuthController");

const { setupProfile } = require("../controllers/userController");
const router = express.Router();

router.use(cors());
router.use(express.json());

// router.route("/api/tasks").get(authenticateJWT, getTasks);
router.route("/setupProfile").post(setupProfile);

module.exports = router;
