import React from "react";
import { ButtonProps, Button as UIButton } from "../ui/button";
import { LoadingSpinner } from "../ui/loadingSpinner";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}
export function Button({ children, isLoading, ...props }: Props) {
  return (
    <UIButton disabled={isLoading} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </UIButton>
  );
}
