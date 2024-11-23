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
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const data = await user.save();

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
          throw err;
        }
        res.json({ token, data });
      }
    );
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send({ success: false, message: "Internal Server error." });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: "Invalid Credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ msg: "Invalid Credentials" });
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
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.send({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        });
      }
    );
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { signup, login };
