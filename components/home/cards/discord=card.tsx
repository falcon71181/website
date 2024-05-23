"use client"
import { useState } from "react";
import { RiDiscordLine } from "react-icons/ri";

export const DiscordCard = () => {
  // TODO: make a alert to notify user
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("falcon_clutch71");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };
  return (
    <span
      onClick={copy}
      className="hover:scale-95 duration-500 transform-gpu h-[3.333rem] flex gap-3 justify-center items-center rounded-lg text-white bg-[#7289D9] w-full cursor-copy"
    >
      <RiDiscordLine className="text-4xl" />
      <span className="font-semibold text-base">@falcon_clutch71</span>
    </span>
  )
}
