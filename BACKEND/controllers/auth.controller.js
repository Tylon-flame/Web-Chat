import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokensAndSetCookies from "../utils/generateTokens.js";
export const signup = async(req,res)=>{
    try{
        let {fullname, username, password, confirmPassword, gender} = req.body;
        username = username?.trim();
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({error: "All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"});
        }   
        const user = await User.findOne({username: { $regex: new RegExp(`^${username}$`, 'i') }});
        if(user){
            return res.status(400).json({error: "User already exists"});
        }   
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
        const girlProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
    const newUser = new User({
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        await newUser.save();
        generateTokensAndSetCookies(newUser._id, res);
    res.status(201).json({_id: newUser._id,fullname: newUser.fullname,username: newUser.username,profilePic: newUser.profilePic});
    }catch(error){
        console.log("ERROR IN SIGNUP ROUTE", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const login = async(req,res)=>{
    try{
        let {username, password} = req.body;
        username = username?.trim();
        if(!username || !password){
            return res.status(400).json({error: "All fields are required"});
        }
        const user = await User.findOne({username: { $regex: new RegExp(`^${username}$`, 'i') }});
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!isPasswordCorrect){
            return res.status(400).json({error: "Invalid password"});
        }
        generateTokensAndSetCookies(user._id, res);
        res.status(200).json({_id: user._id,fullname: user.fullname,username: user.username,profilePic: user.profilePic});
    }catch(error){
        console.log("ERROR IN LOGIN ROUTE", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const logout = async(req,res)=>{
    try{
        res.cookie("jwt", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 0
        });
        res.status(200).json({message: "Logout successful"});
    }catch(error){
        console.log("ERROR IN LOGOUT ROUTE", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};