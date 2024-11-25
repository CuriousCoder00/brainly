"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input";
import { SignupInput, signupSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

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
  const signupHandler = async (data: SignupInput) => {};
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
            to="/auth/login"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
};

export default SignupForm;
