import { Request, Response } from "express";
import Content from "../schemas/content.schema";
import { validationResult } from "express-validator";

export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }


  const { title, body, link } = req.body;

  try {
    const content = new Content({ title, body, link });
    const data = await content.save();
    res.json({ success: true, data:data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

export const getContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await Content.find();
    res.json({ success: true, data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

export const getContentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await Content.findById(req.params.id);
    if (!data) {
      res.status(404).send({ success: false, message: "Content not found." });
      return;
    }
    res.json({ success: true, data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

export const updateContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { title, body, link } = req.body;

  try {
    const data = await Content.findByIdAndUpdate(
      req.params.id,
      { title, body, link },
      { new: true }
    );
    if (!data) {
      res.status(404).send({ success: false, message: "Content not found." });
      return;
    }
    res.json({ success: true, data });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

export const deleteContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await Content.findByIdAndDelete(req.params.id);
    if (!data) {
      res.status(404).send({ success: false, message: "Content not found." });
      return;
    }
    res.json({ success: true, message: "Content deleted successfully." });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};
