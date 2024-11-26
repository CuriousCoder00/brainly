import { atom } from "recoil";

export const tokenState = atom({
  key: "token",
  default: null as string | null,
});

export const authenticatedState = atom({
  key: "authenticated",
  default: false,
});

export const userState = atom({
  key: "user",
  default: null as any,
});

export const themeState = atom({
  key: "theme",
  default: "light",
});

export const sessionState = atom({
  key: "session",
  default: null as any,
});
