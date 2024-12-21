import express from "express";
import { tagValidator } from "../validations/tag.validator";
import { createTag, getTags } from "../controllers/tag.controller";

const tagRouter = express.Router();

tagRouter.post("/", tagValidator, createTag);
tagRouter.get("/", tagValidator, getTags);

export default tagRouter;