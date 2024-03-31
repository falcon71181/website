import { About } from "@/components/home/About";

export const metadata = {
  title: "falcon71181",
  description: "Who am i ? Who is falcon71181 ? Who is Abhay Thakur ? Its falcon71181 personal website including resume and blog posts.",
};
export default function Home() {
  return (
    <main className="p-3 md:p-4 lg:p-5 w-full h-full text-black dark:text-heading border-2 border-red-300">
      <About />
    </main>
  );
}
