import LoginForm from "@/components/auth/login-form";
import Header from "@/components/header";

const Login = () => {
  return (
    <div className="min-h-dvh max-w-screen flex flex-col items-center justify-center">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
