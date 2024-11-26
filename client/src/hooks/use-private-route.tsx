import { authenticatedState } from "@/store/atoms/user";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const AuthenticatedRoute = () => {
  const isAuthenticated = useRecoilValue(authenticatedState);
  return isAuthenticated ? <Outlet /> : <Navigate replace to="/auth/login" />;
};