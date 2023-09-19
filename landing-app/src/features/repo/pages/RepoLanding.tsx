import { CommitHistory } from "../../commit/components/CommitHistory";
import { RepoCard } from "../components/RepoCard";
import { useRepo } from "../hooks/useRepo";

const RepoLandingSkeleton = () => {
  return (
    <div className="w-full h-36 animate-pulse bg-zinc-900 rounded-lg"></div>
  );
};

export const RepoLanding = () => {
  const { data, isError, isLoading } = useRepo();

  if (isLoading) return <RepoLandingSkeleton />;
  if (!data || isError) return <p className="text-white">ERROOOOR</p>;
  if (data.type === "error") return <p className="text-white">ERRRORRRR</p>;

  return (
    <div className="flex flex-col gap-6">
      <RepoCard />
      <CommitHistory />
    </div>
  );
};
