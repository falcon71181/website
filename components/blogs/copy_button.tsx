'use client';

import { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";

const CopyButton = ({ text }: { text: any }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? MdDone : IoCopyOutline;

  return (
    <button
      className="hover:bg-neutral-800 p-2 rounded duration-200"
      disabled={isCopied}
      onClick={copy}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

export default CopyButton;
