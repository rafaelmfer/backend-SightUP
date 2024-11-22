const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");

dotenv.config();

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

// Routes
// Basic route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Routes imports
const authRoutes = require("./src/routes/AuthRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const userRoutes = require("./src/routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
