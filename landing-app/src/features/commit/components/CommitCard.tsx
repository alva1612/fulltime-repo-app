import { CommitInfo } from "../services/fetchAllCommits";

export const CommitCard = ({ commit }: { commit: CommitInfo }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-md border border-zinc-700 shadow-md">
      <h1 className="first-letter:uppercase text-stone-400">
        {commit.commit.message}
      </h1>
    </div>
  );
};
