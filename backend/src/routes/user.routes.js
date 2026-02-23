import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/me").get(verifyJWT, (req, res) => {
    res.status(200).json({
        message: "Logged in user data",
        user: req.user,
    });
});


export default router;