import express from "express";
import { signupValidator, loginValidator } from "../validations/user.validator";
import { login, signup } from "../controllers/auth.controller";

const userRouter = express.Router();

userRouter.post("/signup", signupValidator, signup);
userRouter.post("/login", loginValidator, login);

userRouter.post("/content");

export default userRouter;
