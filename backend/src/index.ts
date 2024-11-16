import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import connectToDB from "./db";
import router from "./routes";
const app = express();
app.use(express.json());
connectToDB();

app.use("/api/v1/auth", router);
// app.post("/api/v1/signup", (req, res) => {});

// app.post("/api/v1/signin", (req, res) => {});

// app.post("/api/v1/content", (req, res) => {});

// app.get("/api/v1/content", (req, res) => {});

// app.delete("/api/v1/content", (req, res) => {});

// app.post("/api/v1/brain/share", (req, res) => {});

// app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
