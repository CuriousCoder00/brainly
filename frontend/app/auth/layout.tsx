import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen mx-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
