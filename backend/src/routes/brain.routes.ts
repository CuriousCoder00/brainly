import express from "express";
import { getLink, shareLink } from "../controllers/brain.controller";
import { userMiddleware } from "../middleware";
const brainRouter = express.Router();

brainRouter.post("/share", userMiddleware, shareLink);
brainRouter.get("/:shareLink", getLink);

export default brainRouter;