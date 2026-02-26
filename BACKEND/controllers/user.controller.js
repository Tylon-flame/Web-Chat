import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const FilteredUsers = await User.find().select("-password");

        res.status(200).json(FilteredUsers);  
    } catch (error) {
        console.error("Error in getUserForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
