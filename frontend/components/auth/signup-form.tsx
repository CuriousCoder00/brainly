"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input-field";
import { SignupInput, signupSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../ui/button";

const SignupForm = () => {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <AuthForm form={form}>
      <form className="flex flex-col w-full space-y-4  my-4">
        <AuthField
          form={form}
          label={"Full Name"}
          name={"name"}
          placeholder={"John Doe"}
        />
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
        <Button type="submit">Signup</Button>
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
