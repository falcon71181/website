import { Repo } from "@/utils/repos";

interface RepoCardProps {
  repo: Repo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <a href={`https://github.com/${repo.repository}`} className="flex flex-col gap-3 p-4 border border-border rounded-lg dark:hover:bg-neutral-900">
      <h1 className="font-semibold text-base">{repo.name}</h1>
      <p className="text-sm">{repo.summary}</p>
    </a>
  )
}
