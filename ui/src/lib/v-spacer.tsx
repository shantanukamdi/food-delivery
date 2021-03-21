import React from "react";

interface Props {
  value: string;
}

const VSpacer = ({ value }: Props) => {
  return <div className={`h-${value}`}></div>;
};

export { VSpacer };
