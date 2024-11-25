import SignupForm from "@/components/auth/signup-form";
import Header from "@/components/header";

const Signup = () => {
  return (
    <div className="min-h-dvh max-w-screen flex flex-col items-center justify-center">
      <Header />
      <SignupForm />
    </div>
  );
};

export default Signup;
