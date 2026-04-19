import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
dotenv.config();
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !password || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check user already exists with this email or username
        const userExists = await User.findOne({
            $or: [{ username }, { email }]
        });

        // Error if user already exists
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // user created
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!password || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }


        const user = await User.findOne({ email });

        // user not found
        if (!user) {
            res.status(400).json({
                success: false,
                message: "User does not exist"
            });
        }

        // verify paasoword
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const secretKey = process.env.JWT_KEY;
        const token = jwt.sign({ user: user._id }, secretKey, { expiresIn: "1d" })

        console.log("Token :", token)

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            token: token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        });
    }
};


export const getAllUsers = async (req, res) => {

    try {
        // Find all users
        const users = await User.find()
        if (!users) {
            return res.status(400).json({ success: false, message: "No user found" })
        }

        res.status(200).json({
            success: true,
            users: users
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}