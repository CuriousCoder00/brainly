"use client";
import React from "react";
import useSession from "@/hooks/use-session";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  React.useEffect(() => {
    if (!session.authenticated) {
      window.location.href = "/auth/login";
    }
    console.log(session);
  });
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
};

export default HomeLayout;
