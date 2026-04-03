import Challenge from "../models/challenge.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Static list of daily challenges
const challenges = [
  "Did you drink enough water?",
  "Did you read for 10 minutes?",
  "Did you say thank you to someone?",
  "Did you clean your room?",
  "Did you help someone today?",
];

// ✅ Get today's challenge
const getTodaysChallenge = asyncHandler(async (req, res) => {
  const today = new Date();
  const index =
    (today.getFullYear() + today.getMonth() + today.getDate()) %
    challenges.length;

  const challenge = challenges[index];

  return res.status(200).json(
    new ApiResponse(200, { challenge }, "Today's challenge fetched successfully")
  );
});

// ✅ Mark challenge as completed
const completeChallenge = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  if (!userId) throw new ApiError(401, "Unauthorized user");

  const today = new Date().toISOString().split("T")[0];

  let record = await Challenge.findOne({ userId, date: today });

  if (record) {
    record.completed = true;
    await record.save();
  } else {
    record = await Challenge.create({ userId, date: today, completed: true });
  }

  return res.status(200).json(
    new ApiResponse(200, record, "Challenge marked as completed")
  );
});

// ✅ Check if challenge is completed
const getChallengeStatus = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  if (!userId) throw new ApiError(401, "Unauthorized user");

  const today = new Date().toISOString().split("T")[0];
  const record = await Challenge.findOne({ userId, date: today });

  return res.status(200).json(
    new ApiResponse(
      200,
      { completed: record ? record.completed : false },
      "Challenge status fetched successfully"
    )
  );
});

export { getTodaysChallenge, completeChallenge, getChallengeStatus };