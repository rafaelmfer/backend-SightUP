const Task = require("../models/TaskModel");

const getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.json(allTasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};

const getTests = async (req, res) => {
    try {
        const Tests = await Task.find({ type: "test" });
        res.json(Tests);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};

const getExercises = async (req, res) => {
    try {
        const users = await Task.find({ type: "exercise" });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching exercise",
            error,
        });
    }
};

module.exports = {
    getTasks,
    getTests,
    getExercises,
};
