import { About } from "@/components/home/About";
import { GridCards } from "@/components/home/cards/grid-cards";
import { RepoCard } from "@/components/home/RepoCard";
import { repos } from "@/utils/repos";

export const metadata = {
  title: "falcon71181",
  description: "Who am i ? Who is falcon71181 ? Who is Abhay Thakur ? Its falcon71181 personal website including resume and blog posts.",
};
export default function Home() {
  return (
    <main className="px-0 sm:px-2 md:px-5 lg:px-9 w-full h-full flex flex-col items-center text-black dark:text-heading border-2 border-red-300">
      <About />
      <GridCards />
      <Projects />
    </main>
  );
}

const Projects = () => {
  return (
    <section className="mt-5 flex flex-col gap-3">
      <h1 className="font-semibold text-lg">Featured Projects</h1>
      <div className="sm:px-2 md:px-4 lg:px-5 grid grid-cols-3 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  )
}
