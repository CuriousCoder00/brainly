"use client";
import React from "react";
import { Form } from "../ui/form";

const AuthForm = ({
  children,
  form,
}: {
  children: React.ReactNode;
  form: any;
}) => {
  return (
    <div className="flex flex-col items-start justify-center mx-auto w-96 shadow-inner dark:shadow-neutral-600 shadow-neutral-300 p-4 md:rounded-xl sm:rounded-lg gap-3">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-xl">Welcome to brainly</h1>
        <p className="text-center">
          A second brain to manage your important links and docs
          <span className="font-bold"> Brainly</span>
        </p>
      </div>
      <Form {...form}>{children}</Form>
    </div>
  );
};

export default AuthForm;
