import Image from "next/image";
import Link from "next/link";
import { getGHStats, getGithubContributions } from "@/lib/get-gh-stats";
import githubBG from "@/public/images/githubBG.png";
import { FiGithub } from "react-icons/fi";

export const GHLink = async () => {
  const { issues, prs, followers, stars } = await getGHStats();
  const { totalContributions, latestContributions, maxContributionDay } = await getGithubContributions();

  return (
    <Link
      className="border dark:border-border relative h-full w-full group flex flex-col justify-between overflow-hidden rounded-2xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
      href="http://github.com/falcon71181"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={githubBG}
          alt="cat img"
          className="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] "
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6 flex justify-between">
        <span className="flex gap-3 text-white items-center">
          <FiGithub fontSize={25} />
          <span className="block font-semibold">GitHub</span>
        </span>
        <span className="font-semibold text-zinc-300 dark:text-white">{totalContributions}</span>
      </span>
      <span className="space-y-0.5 px-6 pb-6 flex justify-between">
        <span className="block text-sm">I make stuffs here.</span>
        <h1 className="block text-sm text-white dark:text-zinc-400">Contributions</h1>
      </span>
      <span className="px-6 pb-6 flex flex-row flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-5">
        <GitHubStatsData label="Stars" value={stars} />
        <GitHubStatsData label="Followers" value={followers} />
        <GitHubStatsData label="PRs" value={prs} />
        <GitHubStatsData label="Issues" value={issues} />
      </span>
    </Link>
  );
};

const GitHubStatsData = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: number;
}) => {
  return (
    <div className="text-zinc-300 dark:text-white">
      <span className="mr-1 text-sm text-white dark:text-zinc-400">
        {label}:
      </span>
      {value}
    </div>
  );
};
