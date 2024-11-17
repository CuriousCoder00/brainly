import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToDB from "./db";
import userRouter from "./routes/user.routers";
import contentRouter from "./routes/content.routers";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5555;

dotenv.config();
app.use(express.json());
connectToDB();

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/content", contentRouter);

// app.post("/api/v1/brain/share", (req, res) => {});

// app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port `, PORT);
});
