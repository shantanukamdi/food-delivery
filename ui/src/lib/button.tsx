import React from "react";

interface ButtonProps {
  label: string;
  type: "button" | "reset" | "submit";
  classes: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ label, type, classes, onClick }: ButtonProps) => {
  return (
    <button className={`bg-brand ${classes}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
