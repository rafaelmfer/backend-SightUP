const { User } = require("../models/UserModel");
const { Daily } = require("../models/UserAssessmentsModel");
const { UserHistory } = require("../models/UserHistoryModel");

const getUser = async (req, res) => {
    try {
        const { userIdentifier } = req.params;

        if (!userIdentifier) {
            return res
                .status(400)
                .json({ message: "Please provide either userId or email" });
        }

        const filter = {};
        if (userIdentifier.includes("@")) {
            filter.email = { $regex: new RegExp(`^${userIdentifier}$`, "i") };
        } else {
            filter.userId = userIdentifier;
        }

        const user = await User.findOne(filter);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const formattedUser = {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user.userId,
            gender: user.gender,
            userName: user.userName,
            preferences: user.preferences,
            birthday: user.birthday,
            eyeWear: user.eyeWear,
        };

        return res.json(formattedUser);
    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
    }
};

const updatePrescription = async (req, res) => {
    try {
        const {
            userId,
            userEmail,
            appTest,
            prescriptionType,
            prescriptionDate,
            manufacturer,
            productName,
            replacement,
            prescriptionInfo,
            notes,
        } = req.body;

        if (!userId && !userEmail) {
            return res
                .status(400)
                .json({ message: "Please provide either userId or userEmail" });
        }

        const parsedPrescriptionDate = new Date(prescriptionDate);

        const filter = {};
        if (userEmail) {
            filter.email = { $regex: new RegExp(`^${userEmail}$`, "i") };
        } else {
            filter._id = userId;
        }

        const user = await User.findOne(filter);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const prescriptionData = {
            appTest,
            prescriptionDate: parsedPrescriptionDate,
            manufacturer: manufacturer || null,
            productName: productName || null,
            replacement: replacement || null,
            prescriptionInfo,
            notes: notes || null,
        };

        if (prescriptionType === "Glasses") {
            user.eyeWear = {
                ...user.eyeWear,
                glasses: prescriptionData,
            };
        } else if (prescriptionType === "Contact Lenses") {
            user.eyeWear = {
                ...user.eyeWear,
                contactLens: prescriptionData,
            };
        } else {
            return res
                .status(400)
                .json({ message: "Invalid prescriptionType" });
        }

        await user.save();

        return res.json({
            message: "Prescription updated successfully",
            user: user,
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};

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

function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const getDailyCheckInfo = async (req, res) => {
    try {
        const daily = new Daily();

        if (req.body.dailyCheckDate) {
            const existDaily = await Daily.find({
                email: req.body.email,
                dailyCheckDate: req.body.dailyCheckDate,
            });
            res.status(200).send(existDaily);
        } else {
            const today = new Date();
            const threeDaysAgo = new Date();
            threeDaysAgo.setDate(today.getDate() - 5);

            const formattedToday = formatDateToYYYYMMDD(today);
            const formattedThreeDaysAgo = formatDateToYYYYMMDD(threeDaysAgo);

            const existDaily = await Daily.find({
                email: req.body.email,
                dailyCheckDate: {
                    $gte: formattedThreeDaysAgo,
                    $lte: formattedToday,
                },
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
            testType: testTitle,
            left: result.left,
            right: result.right,
        };

        if (!userHistory) {
            // If user history does not exist, create a new one
            userHistory = new UserHistory({
                userId,
                userEmail,
                tests: [
                    {
                        date: today,
                        appTest,
                        result: [newTest],
                    },
                ],
            });
        } else {
            // Check if there is already a test entry for today's date
            const existingDayIndex = userHistory.tests.findIndex(
                (test) => test.date.getTime() === today.getTime()
            );

            if (existingDayIndex === -1) {
                // No entry for today, create a new one with the new test
                userHistory.tests.push({
                    date: today,
                    appTest,
                    result: [newTest],
                });
            } else {
                // There is an entry for today, check if the testId is already present
                const existingTestIndex = userHistory.tests[
                    existingDayIndex
                ].result.findIndex((test) => test.testId === newTest.testId);

                if (existingTestIndex === -1) {
                    // testId does not exist, add the new test to the results array
                    userHistory.tests[existingDayIndex].result.push(newTest);
                } else {
                    // testId already exists, replace the test information
                    userHistory.tests[existingDayIndex].result[
                        existingTestIndex
                    ] = newTest;
                }
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
    getUser,
    updatePrescription,
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
    saveTestResult,
    getUserTests,
};
