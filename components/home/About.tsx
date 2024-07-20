import { LinkBadge } from "../ui/link-badge";
import { Badge } from "../ui/badge";
import Icon from "../icons/Icons";
import Image from "next/image";

export const About = () => {
  return (
    <main className="grid grid-cols-4 grid-rows-1 gap-4 text-base md:text-lg text-gray-800 dark:text-neutral-300">
      <div className="flex flex-col gap-2 col-span-4 md:col-span-3">
        <div className="my-3 md:my-4 text-foreground text-lg md:text-xl lg:text-2xl leading-10 transition-all duration-300">
          <h1 className="text-black dark:text-white font-bold">
            Hi, I&apos;m Abhay Thakur ✌️
          </h1>
          <h1 className="text-gray-700 dark:text-neutral-400 text-base font-semibold tracking-wide">- aka falcon71181 (Software Engineer @salescode.ai)</h1>
        </div>
        <p className="leading-6">
          I&apos;m a developer with a passion for building beautiful and
          functional applications.
        </p>
        <p className="leading-6">
          Currently in 7th sem at {" "}
          <LinkBadge href={"https://www.chitkara.edu.in"} target="_blank" className="text-black dark:text-white font-semibold">
            <span className="text-neutral-400">/</span>Chitkara-University
          </LinkBadge>{" "}
          as a Computer Science Engineering (B.E.) student. Originally from the enchanting landscapes of Himachal Pradesh, India.
        </p>
        <p className="leading-6">
          I am a human, and I make stuffs. I guess I can describe myself as {" "}
          <Badge
            className='py-1 px-2 gap-1 rounded-md shadow'
            variant='secondary'
            key="typescript"
          >
            <Icon.TypeScriptIcon className='size-4' />
            <p className='text-xs'>TypeScript</p>
          </Badge>{" "}
          dev, learning {" "}
          <Badge
            className='py-1 px-2 gap-1 rounded-md shadow'
            variant='secondary'
            key="rust"
          >
            <Icon.RUSTIcon className='size-4' />
            <p className='text-xs'>RUST</p>
          </Badge>{" "}
          and loving it and got enough fullstack knowledge to create websites.
        </p>
        <p className="leading-6">
          I use {" "}
          <Badge
            className='py-1 px-2 gap-1 rounded-md shadow'
            variant='secondary'
            key="arch"
          >
            <Icon.ArchIcon className='size-4' />
            <p className='text-xs'>Arch Linux</p>
          </Badge>{" "}
          (btw) and strongly support the Free Software Movement. I believe that software should be open and free, with no shady data selling behind the scenes.
        </p>
      </div>
      <div className="w-full h-full hidden md:flex justify-center items-center md:col-span-1 overflow-hidden">
        <Image
          src={"/images/ProfilePic.png"}
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
