import { LinkBadge } from "../ui/link-badge";
import Image from "next/image";

export const About = () => {
  return (
    <main className="grid grid-cols-4 grid-rows-1 gap-4 text-base md:text-lg text-gray-800 dark:text-neutral-300 mx-0 sm:mx-2 md:mx-5 lg:mx-9">
      <div className="flex flex-col gap-2 col-span-4 md:col-span-3">
        <div className="my-3 md:my-5 text-foreground text-lg md:text-xl lg:text-2xl leading-10 transition-all duration-300">
          <h1 className="text-black dark:text-white font-bold">
            Hi, I&apos;m Abhay Thakur ✌️
          </h1>
          <h1 className="text-gray-700 dark:text-neutral-400 text-base font-semibold tracking-wide">- aka falcon71181</h1>
        </div>
        <p className="leading-6">
          I&apos;m a developer with a passion for building beautiful and
          functional applications.
        </p>
        <p className="leading-6">
          Currently in 6th sem at {" "}
          <LinkBadge href={"https://www.chitkara.edu.in"} target="_blank" className="text-black dark:text-white font-semibold">
            <span className="text-neutral-400">/</span>Chitkara-University
          </LinkBadge>{" "}
          as a Computer Science Engineering (B.E.) student. Originally from the enchanting landscapes of Himachal Pradesh, India.
        </p>
        <p className="leading-6">
          I am a human, and I make stuffs. I guess I can describe myself as {" "}
          <LinkBadge href={"https://www.typescriptlang.org"} target="_blank" className="text-black dark:text-white font-semibold">
            <span className="text-neutral-400">/</span>TypeScript
          </LinkBadge>{" "}
          dev, learning {" "}
          <LinkBadge href={"https://www.rust-lang.org"} target="_blank" className="text-black dark:text-white font-semibold">
            <span className="text-neutral-400">/</span>Rust
          </LinkBadge>{" "}
          and loving it and got enough frontend knowledge to create websites.
        </p>
      </div>
      <div className="w-full h-full hidden md:flex justify-center items-center md:col-span-1 overflow-hidden">
        <Image
          src={"https://avatars.githubusercontent.com/u/48170773"}
          alt="falcon71181"
          width={200}
          height={200}
          priority={true}
          placeholder="blur"
          blurDataURL="https://avatars.githubusercontent.com/u/48170773"
          className="rounded-full hover:scale-105 cursor-pointer transition-transform duration-500"
        />
      </div>
    </main>
  )
}
