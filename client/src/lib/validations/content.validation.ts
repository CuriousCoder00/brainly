import { z } from "zod";

export const contentInput = z.object({
  title: z.string().min(3, "Title is too short").max(20, "Title is too long"),
  body: z.string().min(5, "Body is too short").max(100, "Body is too long"),
  link: z.string().url("Invalid URL").nonempty("Link is required"),
  tags: z.array(
    z.string().min(3, "Tag is too short").max(10, "Tag is too long")
  ),
  type: z.enum(["image", "video", "article", "audio"]),
  userId: z.string().nonempty(),
});

export type ContentInput = z.infer<typeof contentInput>;
