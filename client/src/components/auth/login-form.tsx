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

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
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
    startTransition(() => {
      axios.post(`${BASE_API_URL}/auth/login`, data).then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("session", JSON.stringify(res.data));
        
        setAuthenticated(true);
        navigate("/main");
      });
    });
  };
  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full space-y-4  my-4"
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
