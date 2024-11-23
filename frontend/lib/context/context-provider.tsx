"use client";

import React, { createContext, useEffect } from "react";

export const Context = createContext<any>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <Context.Provider
      value={{
        authenticated,
        setAuthenticated,
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};
