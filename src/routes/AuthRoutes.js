const express = require("express");
const cors = require("cors");
const { login, registerNewUser } = require("../controllers/AuthController");

const router = express();

// Use CORS middleware
router.use(cors()); // This will enable CORS for all routes

// Configuring body-parser (integrated in Express)
router.use(express.json()); // To parse JSON
router.use(express.urlencoded({ extended: true })); // To parse form data

router.route("/register").post(registerNewUser);
router.route("/login").post(login);

module.exports = router;
