import { useAllCommits } from "../hooks/useCommits";
import { CommitCard } from "./CommitCard";

const HistorySkeleton = () => {
  return <>Loading</>;
};
export const CommitHistory = () => {
  const { data, isError, isLoading } = useAllCommits();

  if (isError || isLoading || !data || data.type === "error")
    return <HistorySkeleton />;

  return (
    <div className="w-full rounded-lg flex flex-col gap-3">
      {data.commits.map((commit) => (
        <CommitCard commit={commit} />
      ))}
    </div>
  );
};
