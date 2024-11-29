import { Request, Response } from "express";
import User from "../schemas/user.schema";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array().map((err) => err.msg) });
    return;
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(401).json({success: "failed", error: "User already exists" });
      return;
    }

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || "secret",
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          res.status(500).json({ error: "Internal Server Error" });
        }
        res
          .status(200)
          .json({ success: true, msg: "User registered successfully", token });
      }
    );
  } catch (err: any) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array().map((err) => err.msg) });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ status: "failed", error: "Invalid Credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ status: "failed", error: "Invalid Credentials" });
      return;
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || "secret",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(200).json({
          status: "success",
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          msg: "Login Successful",
        });
      }
    );
  } catch (err: any) {
    res.status(500).json({ error: "Server Error" });
  }
};

export { signup, login };
