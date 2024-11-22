const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const admin = require("firebase-admin");
const { User } = require("../models/UserModel");

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const generateToken = (email, id) => {
    let token = jwt.sign(
        {
            email: email,
            _id: id,
        },
        process.env.SECRET_JWT_SIGN,
        { expiresIn: "8h" } // Set token expiration time
    );

    return token;
};

/**
 * Register Endpoint - Registers a new user to the app.
 * The password is hashed before saving it to the database.
 * @param {Object} req - Express request object containing the user's data. `{ email: string, password: string }`
 * @returns {Object} User object
 */
const registerNewUser = async (req, res) => {
    try {
        const newUser = new User(req.body);

        const userExist = await User.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

        // Save the new user to the database
        const user = await newUser.save();

        // Remove the password from the response
        user.hashPassword = undefined;

        const token = generateToken(user.email, user._id);

        return res.json({
            accessToken: token,
            user: user,
            createProfile: createProfile,
        });
    } catch (err) {
        return res.status(400).send({
            message: err.message,
        });
    }
};

/**
 * Login Email Endpoint - Checks if exists a user with that email
 *
 * @param {Object} req - Express request object containing the user's email. `{ email: abc@example.com }`
 * @returns {Object} JSON object containing a boolean if the user exists or not exist.
 */
const loginEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.query.email });

        // Returns a structured JSON with a boolean
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }

        return res.json({
            success: true,
            message: "User found",
        });
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: err.message,
        });
    }
};

/**
 * Login Endpoint - Logs a user into the app.
 *
 * @param {Object} req - Express request object containing the user's email and password. `{ email: abc@example.com, password: blabla1234 }`
 * @returns {Object} JSON object containing a JWT token upon successful authentication.
 */
const login = async (req, res) => {
    const { password, email } = req.body;
    var createProfile = false;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({
                message: "Authentication failed. No user found",
            });
        }

        const isMatch = await user.comparePassword(password, user.hashPassword);

        if (!isMatch) {
            return res.status(401).json({
                message: "Authentication failed. Wrong password",
            });
        }

        const token = generateToken(user.email, user._id);

        if (
            !user.birthday ||
            !user.gender ||
            !user.measurement ||
            !user.goal ||
            !user.frequencyExercise
        ) {
            createProfile = true;
        }

        user.hashPassword = undefined;
        return res.json({
            accessToken: token,
            user: user,
            createProfile: createProfile,
        });
    } catch (err) {
        return res.status(400).send({
            message: err.message,
        });
    }
};

/**
 * Login with Firebase - Validate idToken from Firebase and generates a new JWT.
 *
 * @param {Object} req - Object that contains the idToken `{ idToken: "firebase_id_token" }`
 * @returns {Object} JSON with the user object, JWT token, and createProfile variable.
 */
const loginWithFirebase = async (req, res) => {
    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({
            message: "idToken not provided",
        });
    }

    try {
        // Validates the idToken using Firebase Admin SDK
        const decodedToken = await admin.auth().verifyIdToken(idToken);

        let user = await User.findOne({
            $or: [{ email: decodedToken.email }],
        });

        let createProfile = false;

        if (!user) {
            user = await new User({
                email: decodedToken.email,
            }).save();
        } else {
            createProfile =
                !user.birthday ||
                !user.gender ||
                !user.measurement ||
                !user.goal ||
                !user.frequencyExercise;
        }

        // Generates New JWT
        const token = generateToken(user.email, user._id);

        res.json({
            accessToken: token,
            user: user,
            createProfile: createProfile,
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({
            message: "idToken invalid",
        });
    }
};

// Middleware of the authentication
const authenticateJWT = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(401)
            .json({ message: "Access Denied. Please login first" });
    }

    try {
        const decoded = jwt.verify(
            token.split(" ")[1],
            process.env.SECRET_JWT_SIGN
        );
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = {
    registerNewUser,
    loginEmail,
    login,
    loginWithFirebase,
    authenticateJWT,
};
