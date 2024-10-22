const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");

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

        return res.json(user);
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

        const token = jwt.sign(
            {
                email: user.email,
                _id: user._id,
            },
            process.env.SECRET_JWT_SIGN,
            { expiresIn: "8h" } // Set token expiration time
        );

        user.hashPassword = undefined;
        return res.json({
            accessToken: token,
            user: user,
        });
    } catch (err) {
        return res.status(400).send({
            message: err.message,
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
    authenticateJWT,
};
