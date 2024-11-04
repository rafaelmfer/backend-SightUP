const { User } = require("../models/UserModel");
const { Daily } = require("../models/UserAssessmentsModel");
const { UserHistory } = require("../models/UserHistoryModel");

const setupProfile = async (req, res) => {
    const { userId, email, userName, birthday, gender, unit, goal, frequency } =
        req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { $or: [{ _id: userId }, { email: email }] },
            {
                userName: userName,
                birthday: birthday,
                gender: gender,
                preferences: {
                    goal: goal,
                    frequency: frequency,
                    unit: unit,
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json({
            message: "updated successfully",
            user: updatedUser,
        });
    } catch (err) {
        return res.status(400).send({
            message: err.message,
        });
    }
};

const setupDailyCheck = async (req, res) => {
    console.log("funcionando");
    try {
        const daily = new Daily(req.body);

        const existDaily = await Daily.findOne({
            email: req.body.email,
            dailyCheckDate: req.body.dailyCheckDate,
        });

        if (existDaily) {
            const {
                dailyCheckInfo,
                dailyCheckDate,
                dailyExerciseInfo,
                ...updateFields
            } = req.body; // Exclui dailyCheckDate e dailyExerciseInfo

            let updateObject = {
                $set: {
                    ...updateFields,
                },
            };

            if (dailyCheckInfo) {
                updateObject.$set["dailyCheckInfo.visionStatus"] =
                    dailyCheckInfo.visionStatus ||
                    existDaily.dailyCheckInfo?.visionStatus;
                updateObject.$set["dailyCheckInfo.condition"] =
                    dailyCheckInfo.condition ||
                    existDaily.dailyCheckInfo?.condition;
                updateObject.$set["dailyCheckInfo.causes"] =
                    dailyCheckInfo.causes || existDaily.dailyCheckInfo?.causes;
            }

            if (dailyExerciseInfo) {
                updateObject.$push = {
                    dailyExerciseInfo: dailyExerciseInfo,
                };
            }

            const updatedDaily = await Daily.findOneAndUpdate(
                {
                    email: req.body.email,
                    dailyCheckDate: req.body.dailyCheckDate,
                },
                updateObject,
                { new: true }
            );

            return res.status(200).json({
                message: "Updated successfully",
                updatedDaily,
            });
        }

        const saveDaily = await daily.save();
        console.log(saveDaily);
        res.status(200).send(saveDaily);
    } catch (error) {
        console.error("Erro ao salvar no MongoDB:", error);
        res.status(500).send("Erro ao salvar no banco de dados");
    }
};

const getDailyCheckInfo = async (req, res) => {
    try {
        const daily = new Daily(req.body);

        if (req.body.dailyCheckDate) {
            const existDaily = await Daily.find({
                email: req.body.email,
                dailyCheckDate: req.body.dailyCheckDate,
            });
            res.status(200).send(existDaily);
        } else {
            const existDaily = await Daily.find({
                email: req.body.email,
            });
            res.status(200).send(existDaily);
        }
    } catch (error) {
        res.status(500).send("Error try do again");
    }
};

const saveTestResult = async (req, res) => {
    const { userId, userEmail, appTest, testId, testTitle, result } = req.body;

    try {
        let userHistory = await UserHistory.findOne({ userId, userEmail });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const newTest = {
            testId,
            testTitle,
            date: today,
            result,
        };

        // If it doesn't exist, a new one is created
        if (!userHistory) {
            userHistory = new UserHistory({
                userId,
                userEmail,
                appTest,
                tests: [newTest],
            });
        } else {
            // If it's, we check the date
            const existingTestIndex = userHistory.tests.findIndex(
                (test) =>
                    test.date.getTime() === today.getTime() &&
                    test.testId === newTest.testId
            );

            if (existingTestIndex !== -1) {
                userHistory.tests[existingTestIndex].result = result;
            } else {
                userHistory.tests.push(newTest);
            }
        }

        await userHistory.save();
        res.status(200).json({
            message: "Test result saved successfully",
            userHistory,
        });
    } catch (error) {
        res.status(500).json({ message: "Error saving test result", error });
    }
};

const getUserTests = async (req, res) => {
    try {
        const { user } = req.params;

        const filter = {};
        if (user.includes("@")) {
            filter.userEmail = user;
        } else {
            filter.userId = user;
        }

        if (Object.keys(filter).length === 0) {
            return res
                .status(400)
                .json({ message: "Please provide either userId or userEmail" });
        }

        const userTests = await UserHistory.findOne(filter);

        if (!userTests) {
            return res
                .status(404)
                .json({ message: "No test results found for this user" });
        }

        res.status(200).json(userTests);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving test results for user",
            error,
        });
    }
};

module.exports = {
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
    saveTestResult,
    getUserTests,
};
