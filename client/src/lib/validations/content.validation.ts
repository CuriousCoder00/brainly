import { z } from "zod";

export const contentInput = z.object({
  title: z.string().min(3, "Title is too short").max(20, "Title is too long"),
  body: z.string().min(5, "Body is too short").max(100, "Body is too long"),
  link: z.string().url("Invalid URL").optional(),
  tags: z.array(z.string()).min(1, "Tags are required"),
  type: z.enum(["image", "video", "article", "audio", "tweet"]),
});

export type ContentInput = z.infer<typeof contentInput>;

export const fetchContentFormat = z.object({
  _id: z.string(),
  title: z.string(),
  body: z.string(),
  link: z.string(),
  tags: z.array(
    z.object({
      _id: z.string(),
      name: z.string(),
    })
  ),
  type: z.enum(["image", "video", "article", "audio", "tweet"]),
  user: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
});

export type FetchContentFormat = z.infer<typeof fetchContentFormat>;
