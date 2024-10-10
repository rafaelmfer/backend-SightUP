const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");

dotenv.config();

// Routes imports
const taskRoutes = require("./src/routes/taskRoutes");

// Express App
const app = express();

//Configuring CORS to allow all origins
app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET", "PUT"],
        credentials: true,
    })
);

app.use(express.json()); // To parse JSON
app.use(express.urlencoded({ extended: true })); // To parse form data

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

// JWT setup
app.use((req, res, next) => {
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split("=")[0] === "JWT"
    ) {
        jsonwebtoken.verify(
            req.headers.authorization.split("=")[1],
            process.env.SECRET_JWT_SIGN,
            (err, decode) => {
                if (err) req.user = undefined;
                req.user = decode;
                next();
            }
        );
    } else {
        req.user = undefined;
        next();
    }
});

// Routes
// Basic route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Routes imports
const authRoutes = require("./src/routes/AuthRoutes");
const taskRoutes = require("./src/routes/taskRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;
