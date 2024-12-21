import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToDB from "./db";
import userRouter from "./routes/user.routes";
import contentRouter from "./routes/content.routes";
import tagRouter from "./routes/tag.routes";
import brainRouter from "./routes/brain.routes";

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
app.use("/api/v1/brain", brainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port `, PORT);
});
