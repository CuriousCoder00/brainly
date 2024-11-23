"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input-field";
import { LoginInput, loginSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../ui/button";
import { BASE_URL } from "@/lib/data";
import axios from "axios";
import useSession from "@/hooks/use-session";
import { Context } from "@/lib/context/context-provider";

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const { setUser, setToken, setAuthenticated } = useContext(Context);
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler = async (data: LoginInput) => {
    startTransition(async () => {
      await axios.post(`${BASE_URL}/auth/login`, data).then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setToken(res.data.token);
          setAuthenticated(true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.href = "/home";
        }
        console.log(res.data);
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
          form={form}
          label={"Email Address"}
          name={"email"}
          placeholder={"john.doe@gmail.com"}
        />
        <AuthField
          form={form}
          label={"Password"}
          name={"password"}
          placeholder={"******"}
          type="password"
        />
        <Button type="submit">Login</Button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm text-white hover:text-blue-400"
            href="/auth/signup"
          >
            Don&apos;t have an account yet?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
