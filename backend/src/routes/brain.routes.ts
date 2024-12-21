import express from "express";
import { shareLink } from "../controllers/brain.controller";
import { userMiddleware } from "../middleware";
const brainRouter = express.Router();

brainRouter.post("/share", userMiddleware, shareLink);

export default brainRouter;