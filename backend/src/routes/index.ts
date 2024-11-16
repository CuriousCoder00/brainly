import express from "express";
import { signupValidator, loginValidator } from "../validations/user.validator";
import { login, signup } from "../controllers/user.controller";

const router = express.Router();

router.post("/signup", signupValidator, signup);
router.post("/login", loginValidator, login);

export default router;