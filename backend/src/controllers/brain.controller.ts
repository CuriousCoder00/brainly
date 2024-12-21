import { Request, Response } from "express";
import Link from "../schemas/link.schema";

export const shareLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { hash, userId } = req.body;
        const link = new Link({
            hash,
            userId,
        });
        const data = await link.save();
        res.json({ success: true, data });
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send({ success: false, message: "Internal Server error." });
    }
};