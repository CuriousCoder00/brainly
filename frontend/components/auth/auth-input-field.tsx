import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/form";

import React from "react";
import { Input } from "../ui/input";

const AuthField = ({
  form,
  label,
  name,
  placeholder,
  type,
  disabled,
}: {
  form: any;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type ? type : "text"}
              disabled={disabled ? disabled : false}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-500 text-end" />
        </FormItem>
      )}
    />
  );
};

export default AuthField;
