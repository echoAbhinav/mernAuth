import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
    try {
        const { userId } = req;

        if (!userId) {
            return res.json({ success: false, message: "User ID is required" });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        return res.json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                isAccountVerified: user.isAccountVerified,
            }
        });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
