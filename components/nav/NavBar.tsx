import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";

type navItem = {
  name: string;
  href: string;
};

const navItems: navItem[] = [
  { name: "blog", href: "/blog" },
  { name: "resume", href: "/resume" },
];

const NavBar = () => {
  return (
    <main className="w-full h-[3rem] flex items-center justify-between">
      <Link
        href="/"
        className="text-black dark:text-white text-xl md:text-2xl font-semibold tracking-widest transition-all duration-500"
      >
        falcon71181
      </Link>
      <section className="flex items-center gap-4 md:gap-7 transition-all duration-500">
        {navItems.map(({ name, href }) => (
          <Link
            key={name + href}
            href={href}
            className="text-black dark:text-white text-lg md:text-xl font-medium hover:text-hover_link_light dark:hover:text-hover_heading transition-all duration-500"
          >
            {name}
          </Link>
        ))}
        <ThemeSwitcher />
      </section>
    </main>
  );
};

export default NavBar;
