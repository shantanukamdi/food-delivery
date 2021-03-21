import React from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  ariaLabel?: string;
  classes: string;
  type: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { label } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm text-gray-400 font-light">
        {label}
      </label>
      <input
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
        autoComplete="none"
        {...props}
      />
    </div>
  );
};

export { Input };
