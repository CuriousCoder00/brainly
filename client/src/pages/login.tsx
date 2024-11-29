import LoginForm from "@/components/auth/login-form";
import Header from "@/components/header";
import useSession from "@/hooks/use-session";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate("/app");
    }
  }, [navigate, session]);
  return (
    <div className="min-h-dvh max-w-screen flex flex-col items-center justify-center">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
