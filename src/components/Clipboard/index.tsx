import { useState } from "react";

type Props = {
  value: string;
};

export function Clipboard({ value }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
  };

  return (
    <button className="text-teal-500 font-semibold" onClick={handleClick}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
