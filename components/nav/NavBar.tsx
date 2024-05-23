import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TbTriangleInvertedFilled } from "react-icons/tb";

type navItem = {
  name: string;
  href: string;
  target: "_self" | "_blank";
};

const navItems: navItem[] = [
  { name: "blog", href: "/blogs", target: "_self" },
  { name: "resume", href: "/resume.pdf", target: "_blank" },
];

const NavBar = () => {
  return (
    <main className="py-3 w-full h-fit flex items-center justify-between">
      <Link
        href="/"
        className="font-handwrite text-black dark:text-white text-2xl md:text-3xl font-extrabold tracking-widest transition-all duration-500"
      >
        falcon71181
      </Link>
      <section className="flex items-center gap-4 md:gap-7 transition-all duration-500">
        {navItems.map(({ name, href, target }) => (
          <Link
            key={name + href}
            href={href}
            target={target}
            className="hidden sm:block text-black dark:text-white text-lg md:text-xl font-medium hover:text-hover_link_light dark:hover:text-white_light transition-all duration-500"
          >
            {name}
          </Link>
        ))}
        <ThemeSwitcher />
        <div className="sm:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="group">
              <TbTriangleInvertedFilled className="group-data-[state=open]:rotate-180 duration-300 cursor-pointer text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/" className="cursor-pointer">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link href="/blogs" className="cursor-pointer">
                <DropdownMenuItem>Blog</DropdownMenuItem>
              </Link>
              <Link href="/resume.pdf" target="_blank" className="cursor-pointer">
                <DropdownMenuItem>Resume</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
