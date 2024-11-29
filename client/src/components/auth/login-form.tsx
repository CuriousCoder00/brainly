"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input";
import { LoginInput, loginSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "@/lib/data";
import { useSetRecoilState } from "recoil";
import { authenticatedState } from "@/store/atoms/user";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const { toast } = useToast();
  const setAuthenticated = useSetRecoilState(authenticatedState);
  const navigate = useNavigate();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler = async (data: LoginInput) => {
    setIsPending(true);
    try {
      const res = await axios.post(`${BASE_API_URL}/auth/login`, data);
      if (res.status === 200 && res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("session", JSON.stringify(res.data));
        setAuthenticated(true);
        toast({
          title: res?.data.msg,
          description: "You have successfully logged in",
        });
        navigate("/app");
        setIsPending(false);
      }
      if (res.data.status === "failed") {
        toast({
          variant: "destructive",
          type: "background",
          title: res.data.error,
          description: "An error occured while trying to login",
        });
        setIsPending(false);
      }
      setIsPending(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        type: "background",
        title: error.response.data.error,
        description: "An error occured while trying to login",
      });
      setIsPending(false);
    }
  };

  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full space-y-4 my-4"
        onSubmit={form.handleSubmit(loginHandler)}
      >
        <AuthField
          disabled={isPending}
          form={form}
          label={"Email Address"}
          name={"email"}
          placeholder={"john.doe@gmail.com"}
        />
        <AuthField
          disabled={isPending}
          form={form}
          label={"Password"}
          name={"password"}
          placeholder={"******"}
          type="password"
        />
        <Button disabled={isPending} type="submit">
          Login
        </Button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm text-white hover:text-blue-400"
            to="/auth/signup"
          >
            Don&apos;t have an account yet?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
