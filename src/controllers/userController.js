const { User } = require("../models/UserModel");

const setupProfile = async (req, res) => {
    console.log(res);
    const { userId, email, userName, birthday, gender, unit, goal, frequency } =
        req.body;

    try {
        console.log(email);
        console.log(gender);
        console.log(unit);
        console.log(frequency);
        console.log(birthday);
        console.log(userId);

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

module.exports = {
    setupProfile,
};
