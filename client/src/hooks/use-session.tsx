import { authenticatedState, sessionState } from "@/store/atoms/user";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useSession = () => {
  const session = useRecoilValue(sessionState);
  const setSession = useSetRecoilState(sessionState);
  const setIsAuthenticated = useSetRecoilState(authenticatedState);
  useEffect(() => {
    const localSession = localStorage.getItem("session");
    if (localSession) {
      setSession(JSON.parse(localSession));
      setIsAuthenticated(true);
    }
  }, []);
  return { session, setSession };
};

export default useSession;
