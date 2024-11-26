"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "./auth-form";
import AuthField from "./auth-input";
import { SignupInput, signupSchema } from "@/lib/validations/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { BASE_API_URL } from "@/lib/data";

const SignupForm = () => {
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const signupHandler = async (data: SignupInput) => {
    setIsPending(true);
    try {
      const res = await axios.post(`${BASE_API_URL}/auth/signup`, data);
      if (res.status === 200) {
        toast({
          title: res?.data.msg,
          description: "You have successfully signed up",
        });
        navigate("/auth/login");
        setIsPending(false);
      }
      if (res.status === 401) {
        toast({
          variant: "destructive",
          type: "background",
          title: res.data.error,
          description: "An error occured while trying to Signup",
        });
        setIsPending(false);
      }
      setIsPending(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        type: "background",
        title: error.response.data.error,
        description: "An error occured while trying to Signup",
      });
      setIsPending(false);
    }
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
