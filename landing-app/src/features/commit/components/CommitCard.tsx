import { CommitInfo } from "../services/fetchAllCommits";

export const CommitCard = ({ commit }: { commit: CommitInfo }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-md border border-zinc-700 shadow-md">
      <div className="flex justify-between">
        <h1 className="text-stone-400 font-bold flex">
          {commit.sha.substring(0, 10)} -&nbsp;
          <span className="inline-block first-letter:uppercase max-w-[120px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-none text-ellipsis overflow-hidden whitespace-nowrap">
            {commit.commit.message}
          </span>
        </h1>
        <div className="flex gap-4">
          <p className="hidden sm:inline-block text-stone-400">
            {commit.author.login}
          </p>
          <img src={commit.committer.avatar_url} className="w-6 rounded" />
        </div>
      </div>
    </div>
  );
};
