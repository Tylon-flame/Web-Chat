import mongoose from "mongoose";
import User from "./models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const test = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to DB");

        const username = "Rajat";
        console.log(`Checking for username: "${username}"`);
        
        const existing = await User.findOne({ 
            username: { $regex: new RegExp(`^${username}$`, 'i') } 
        });

        if (existing) {
            console.log("EXISTING USER FOUND:", existing);
        } else {
            console.log("NO EXISTING USER FOUND. Proceeding to save...");
            // We won't actually save yet, let's just see if findOne fails
        }
        
        process.exit(0);
    } catch (e) {
        console.error("FATAL ERROR:", e);
        process.exit(1);
    }
}

test();
