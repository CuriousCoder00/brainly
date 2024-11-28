import {
  FetchContentFormat,
} from "@/lib/validations/content.validation";
import { atom } from "recoil";

export const content = atom({
  key: "content",
  default: {} as FetchContentFormat,
});

export const contents = atom({
  key: "contents",
  default: [] as FetchContentFormat[],
});
