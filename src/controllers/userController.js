const { User } = require("../models/UserModel");
const { Daily } = require("../models/UserAssessmentsModel");

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

module.exports = {
    setupProfile,
    setupDailyCheck,
    getDailyCheckInfo,
};
