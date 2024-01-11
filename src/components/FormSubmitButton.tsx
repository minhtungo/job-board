"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";
import LoadingButton from "./LoadingButton";

interface FormSubmitButtonProps {}

const FormSubmitButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { pending } = useFormStatus();
  return <LoadingButton {...props} type="submit" loading={pending} />;
};

export default FormSubmitButton;
