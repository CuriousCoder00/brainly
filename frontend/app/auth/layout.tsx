"use client";
import useSession from "@/hooks/use-session";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  React.useEffect(() => {
    if (session.authenticated) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen mx-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
