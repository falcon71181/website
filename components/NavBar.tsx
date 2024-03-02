import Link from "next/link";
import ThemeSwitcher from "@/app/ThemeSwitcher";

const NavBar = () => {
  return (
    <main className="w-full h-[4rem] flex items-center justify-between">
      <Link
        href="/"
        className="text-black dark:text-heading_white text-2xl font-semibold tracking-widest"
      >
        falcon71181
      </Link>
      <section className="flex gap-7">
        <Link
          href="/"
          className="text-black dark:text-heading_white text-xl font-medium hover:text-hover_link_ligth dark:hover:text-hover_links_dark"
        >
          blog
        </Link>
        <Link
          href="/"
          className="text-black dark:text-heading_white text-xl font-medium hover:text-hover_link_ligth dark:hover:text-hover_links_dark"
        >
          resume
        </Link>
        <ThemeSwitcher />
      </section>
    </main>
  );
};

export default NavBar;
