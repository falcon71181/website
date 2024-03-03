import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";

const NavBar = () => {
  return (
    <main className="w-full h-[3rem] flex items-center justify-between">
      <Link
        href="/"
        className="text-black dark:text-white text-2xl font-semibold tracking-widest"
      >
        falcon71181
      </Link>
      <section className="flex gap-7">
        <Link
          href="/"
          className="text-black dark:text-white text-xl font-medium hover:text-hover_link_light dark:hover:text-hover_heading"
        >
          blog
        </Link>
        <Link
          href="/"
          className="text-black dark:text-white text-xl font-medium hover:text-hover_link_light dark:hover:text-hover_heading"
        >
          resume
        </Link>
        <ThemeSwitcher />
      </section>
    </main>
  );
};

export default NavBar;
