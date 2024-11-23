import React, { useContext } from "react";
import { Context } from "../lib/context/context-provider";
const useSession = () => {
  const { authenticated, setAuthenticated, token, setToken, user, setUser } =
    useContext(Context);
  return { authenticated, setAuthenticated, token, setToken, user, setUser };
};

export default useSession;
