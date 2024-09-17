const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();

// Express App
const app = express();

// Configuring CORS to allow all origins
app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET", "PUT"],
        credentials: true,
    })
);

// Configuring body-parser (integrated in Express)
app.use(express.json()); // To parse JSON
app.use(express.urlencoded({ extended: true })); // To parse form data

// Database connection
console.log("BACKEND.......");
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
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


module.exports = app;
