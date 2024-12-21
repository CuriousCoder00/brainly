import express from "express";
import {
  contentValidator,
  contentUpdateValidator,
} from "../validations/content.validator";
import {
  createContent,
  getContent,
  getContentById,
  updateContent,
  deleteContent,
  getContentByUserId,
} from "../controllers/content.controller";
import { userMiddleware } from "../middleware";
const contentRouter = express.Router();

contentRouter.post("/", contentValidator, userMiddleware, createContent);
contentRouter.get("/", contentValidator, userMiddleware, getContent);
contentRouter.get("/u/:user", getContentByUserId);
contentRouter.get("/:id", getContentById);
contentRouter.put("/:id", contentUpdateValidator, updateContent);
contentRouter.delete("/:id", deleteContent);

export default contentRouter;
