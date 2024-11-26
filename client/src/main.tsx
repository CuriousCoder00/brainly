import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { Toaster } from "@/components/ui/toaster.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
      <Toaster />
    </RecoilRoot>
  </StrictMode>
);
