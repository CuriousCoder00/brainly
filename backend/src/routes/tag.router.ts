import express from "express";
import { tagValidator } from "../validations/tag.validator";
import { createTag } from "../controllers/tag.controller";

const tagRouter = express.Router();

tagRouter.post("/", tagValidator, createTag);

export default tagRouter;