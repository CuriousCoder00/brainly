"use state";
import React, { useContext } from "react";
import { Context } from "../lib/context/context-provider";
const useSession = () => {
  const { authenticated, setAuthenticated, token, setToken } =
    useContext(Context);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setAuthenticated(true);
    }
    console.log("Session: ", authenticated);
  });
  return { authenticated, setAuthenticated, token, setToken };
};

export default useSession;
