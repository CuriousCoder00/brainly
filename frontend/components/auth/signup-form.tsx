"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input-field";
import { SignupInput, signupSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../ui/button";
import { BASE_URL } from "@/lib/data";

const SignupForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const signupHandler = async (data: SignupInput) => {
    startTransition(async () => {
      await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
  };
  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full space-y-4  my-4"
        onSubmit={form.handleSubmit(signupHandler)}
      >
        <AuthField
          disabled={isPending}
          form={form}
          label={"Full Name"}
          name={"name"}
          placeholder={"John Doe"}
        />
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
          Signup
        </Button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm text-white hover:text-blue-400"
            href="/auth/login"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
};

export default SignupForm;
