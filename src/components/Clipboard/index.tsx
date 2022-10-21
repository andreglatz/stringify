import { useState } from "react";

type Props = {
  value: string;
  isCopied?: boolean;
  onClick?: () => void;
};

export function Clipboard({ value, isCopied, onClick }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(value);
    onClick && onClick();
  };

  return (
    <button className="text-teal-500 font-semibold" onClick={handleClick}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
