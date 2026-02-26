import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokensAndSetCookies from "../utils/generateTokens.js";
export const signup = async(req,res)=>{
    try{
        const {fullname, username, password, confirmPassword, gender} = req.body;
        if(!fullname || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"});
        }   
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }   
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
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
        res.status(500).json({message: "Internal server error"});
    }
    console.log("signup route");
};

export const login = async(req,res)=>{
    try{
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password"});
        }
        generateTokensAndSetCookies(user._id, res);
        res.status(200).json({_id: user._id,fullname: user.fullname,username: user.username,profilePic: user.profilePic});
    }catch(error){
        console.log("ERROR IN LOGIN ROUTE", error.message);
        res.status(500).json({message: "Internal server error"});
    }
    console.log("login route");
};

export const logout = async(req,res)=>{
    try{
        res.cookie("jwt", "", {
            maxAge:0
        });
        res.status(200).json({message: "Logout successful"});
    }catch(error){
        console.log("ERROR IN LOGOUT ROUTE", error.message);
        res.status(500).json({message: "Internal server error"});
    }
    console.log("logout route");
};