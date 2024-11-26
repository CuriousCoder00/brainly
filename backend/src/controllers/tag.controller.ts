import { Request, Response } from "express";
import Tag from "../schemas/tag.schema";
import { validationResult } from "express-validator";

export const createTag = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  const { name } = req.body;
  try {
    const tag = new Tag({
      name,
    });
    const data = await tag.save();
    res.json({ success: true, data: data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

export const getTags = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Tag.find();
    res.json({ success: true, data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};
