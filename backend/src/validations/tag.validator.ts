import { body } from "express-validator";

export const tagValidator = [body("name", "Name is required").not().isEmpty()];
