"use client";

import React, { createContext, useEffect } from "react";

export const Context = createContext({
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => {},
  token: null as string | null,
  setToken: (token: string | null) => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
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
