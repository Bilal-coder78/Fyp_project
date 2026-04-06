import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getTodaysChallenge, completeChallenge, getChallengeStatus } from "../controllers/challenge.controller.js";

const router = Router();

// Get today's challenge
router.route("/today").get(getTodaysChallenge);

// Mark challenge as completed
router.route("/complete").post(verifyJWT, completeChallenge);
router.route("/status").get(verifyJWT, getChallengeStatus);

export default router;