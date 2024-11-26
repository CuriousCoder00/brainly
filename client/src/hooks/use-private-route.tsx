import AppLayout from "@/components/main/sidebar/app-layout";
import { authenticatedState } from "@/store/atoms/user";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const AuthenticatedRoute = () => {
  const isAuthenticated = useRecoilValue(authenticatedState);
  return isAuthenticated ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate replace to="/auth/login" />
  );
};
