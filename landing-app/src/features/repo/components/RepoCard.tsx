import { FC } from "react";
import { useRepo } from "../hooks/useRepo";

export const CardSkeleton: FC = () => {
  return (
    <div className="w-full h-36 rounded-lg bg-zinc-800 border border-zinc-700 shadow"></div>
  );
};

export const RepoCard = () => {
  const { data, isError, isLoading } = useRepo();
  if (isLoading || isError || !data || data.type === "error")
    return <CardSkeleton />;

  return (
    <div className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="uppercase font-bold text-xl text-stone-400">
            {data.name}
          </h1>
          <h4 className="text-stone-400 text-base">{data.owner.login}</h4>
        </div>
        <img
          className="rounded-lg w-12 border border-zinc-700 shadow"
          src={data.owner.avatar_url}
          alt={data.owner.avatar_url}
        />
      </div>
      <hr className="border-zinc-600 my-4" />
      <p className="text-stone-400 ">{data.description}</p>
    </div>
  );
};
