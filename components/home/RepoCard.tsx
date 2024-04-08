import { Repo } from "@/utils/repos";

interface RepoCardProps {
  repo: Repo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <a href={`https://github.com/${repo.repository}`} className="flex flex-col gap-3 p-4 border dark:border-border rounded-lg dark:bg-transparent bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-900">
      <h1 className="font-semibold text-base">{repo.name}</h1>
      <p className="text-sm dark:text-zinc-300">{repo.summary}</p>
    </a>
  )
}
