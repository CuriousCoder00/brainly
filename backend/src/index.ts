import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToDB from "./db";
import userRouter from "./routes/user.routers";
import contentRouter from "./routes/content.routers";
import tagRouter from "./routes/tag.router";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const PORT = process.env.PORT || 5555;

dotenv.config();
app.use(express.json());
connectToDB();

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/tag", tagRouter);
// app.post("/api/v1/brain/share", (req, res) => {});

// app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port `, PORT);
});
