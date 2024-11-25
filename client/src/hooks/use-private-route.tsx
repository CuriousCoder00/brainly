import { Navigate, Outlet } from "react-router-dom";

const AuthenticateRoute = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  return isAuthenticated ? <Outlet /> : <Navigate replace to="/auth/login" />;
};

export default AuthenticateRoute;
