import { About } from "@/components/home/About";
import { GridCards } from "@/components/home/cards/grid-cards";

export const metadata = {
  title: "falcon71181",
  description: "Who am i ? Who is falcon71181 ? Who is Abhay Thakur ? Its falcon71181 personal website including resume and blog posts.",
};
export default function Home() {
  return (
    <main className="px-0 sm:px-2 md:px-5 lg:px-9 w-full h-full text-black dark:text-heading border-2 border-red-300">
      <About />
      <GridCards />
    </main>
  );
}
