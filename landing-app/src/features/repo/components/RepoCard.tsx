import { FC } from "react";
import { useRepo } from "../hooks/useRepo";
import { decomposeDate } from "../../../common/utils/dates";

export const CardSkeleton: FC = () => {
  return (
    <div className="w-full h-36 rounded-lg bg-zinc-800 border border-zinc-700 shadow"></div>
  );
};

export const RepoCard = () => {
  const { data, isError, isLoading } = useRepo();
  if (isLoading || isError || !data || data.type === "error")
    return <CardSkeleton />;

  const { paddedMonth, paddedDay, year, paddedHour, paddedMinute } =
    decomposeDate(data.updated_at);

  return (
    <div className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <a
            className="uppercase font-bold text-xl text-stone-400"
            href={`https://github.com/${data.full_name}`}
          >
            {data.name}
          </a>
          <a
            className="text-stone-400 text-base underline"
            href={`https://github.com/${data.owner.url}`}
          >
            {data.owner.login}
          </a>
        </div>
        <img
          className="rounded-lg w-12 border border-zinc-700 shadow"
          src={data.owner.avatar_url}
          alt={data.owner.avatar_url}
        />
      </div>
      <hr className="border-zinc-600 my-4" />
      <p className="text-base italic text-stone-400">{`${paddedDay}-${paddedMonth}-${year} ${paddedHour}:${paddedMinute}`}</p>
      <p className="text-stone-400 ">{data.description}</p>
    </div>
  );
};
