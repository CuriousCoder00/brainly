import { body } from "express-validator";

export const contentValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("body", "Body is required").not().isEmpty(),

  body("tags", "Tags are required").isArray({ min: 1 }),
  body("type", "Type is required").not().isEmpty(),
  body("user", "User is required").not().isEmpty(),
];

export const contentUpdateValidator = [
  body("title", "Title is required").not().isEmpty(),
  body("body", "Body is required").not().isEmpty(),
  body("link", "Link is required").not().isEmpty(),
];
