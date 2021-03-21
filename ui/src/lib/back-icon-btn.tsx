import React from "react";

interface Props {
  onClick?: (e: React.FormEvent<SVGSVGElement> | undefined) => void;
}

const BackArrowButton = ({ onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 bg-gray-50 rounded-full p-2"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export { BackArrowButton };
