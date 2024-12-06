const { Task } = require("../models/TaskModel");

const getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.json(allTasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};

const getTests = async (req, res) => {
    try {
        const Tests = await Task.find({ type: "test" });
        res.json(Tests);
    } catch (error) {
        console.error("Error fetching tests:", error); // Log completo del error
        res.status(500).json({
            message: "Error fetching tasks",
            error: error.message || error,
        });
    }
};

const getExercises = async (req, res) => {
    try {
        const users = await Task.find({ type: "exercise" });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching exercises:", error);
        res.status(500).json({
            message: "Error fetching tasks",
            error: error.message || error,
        });
    }
};

module.exports = {
    getTasks,
    getTests,
    getExercises,
};
