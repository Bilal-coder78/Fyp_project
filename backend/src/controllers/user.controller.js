import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

export const registerUser = asyncHandler(async (req, res) => {

    //get the user data from the request body
    const { username, email, password } = req.body;
    console.log("email:", email)

    //validate the user data
    if ([username, email, password].some((field) =>
        field.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    if (!email.includes("@")) {
        throw new ApiError(400, "Invalid email address")
    }

    //check if the user already exists
    const existedUser = await User.findOne({
        $or: [{ email }, { username }]
    })
    if (existedUser) {
        throw new ApiError(400, "User already exists with current email or username")
    }

    //create the user
    const user = await User.create({
        username: username.toLowerCase().trim(),
        email,
        password
    })

    //remove password from the response
    const createdUser = await User.findById(user._id).select("-password")

    //check if the user was created successfully
    if (!createdUser) {
        throw new ApiError(500, "Failed to create user")
    }

    //send the response
    return res.status(201).json(
        new ApiResponse(201, "User registered successfully", createdUser)
    )
})

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email)

    if (!email && !password) {
        throw new ApiError(400, "Email and password are required")
    }

    //find the user
    const user = await User.findOne({
        $or: [{ email }, { password }]
    })

    if (!user) {
        throw new ApiError(400, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorect(password)

    if(!isPasswordValid) {
        throw new ApiError(400, "Invalid password")
    }

    const loggedInUser = await User.findById(user._id).select("-password")

    return res.status(200).json(
        new ApiResponse(200, "User logged in successfully", loggedInUser)
    )
})