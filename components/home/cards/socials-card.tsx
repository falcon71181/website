"use client"
import { useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImReddit } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

export const SocailsCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("falcon_clutch71");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <div className="flex gap-2">
      <a
        href="https://www.linkedin.com/in/abhay-thakur-81a3952bb"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[3.333rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
      >
        <SlSocialLinkedin className="text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/falcon71181"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[3.333rem] flex flex-col justify-center items-center rounded-lg text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-full"
      >
        <FaInstagram className="text-4xl" />
      </a>
      <span
        onClick={copy}
        className="hover:scale-95 duration-500 transform-gpu h-[3.333rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#7289D9] w-full cursor-copy"
      >
        <RiDiscordLine className="text-4xl" />
      </span>
      <a
        href="https://www.reddit.com/u/Any-Assumption-8925/s/plWBNcxKhu"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[3.333rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#FC4C01] w-full"
      >
        <ImReddit className="text-4xl" />
      </a>
    </div>
  );
};
