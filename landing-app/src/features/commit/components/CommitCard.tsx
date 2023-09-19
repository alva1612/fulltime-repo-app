import React, { useCallback, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import clsx from "clsx";
import { CommitInfo } from "../services/fetchAllCommits";
import { useOneCommit } from "../hooks/useOneCommit";

import { BiCopy } from "react-icons/bi";
import { File } from "../services/fechOneCommit";

import styles from "./detailsGrid.module.css";
import { decomposeDate } from "../../../common/utils/dates";

const DetailsSkeleton = () => {
  return <></>;
};

const FileDetails = ({ file }: { file: File }) => {
  return (
    <>
      <div>
        <p className="text-stone-400 whitespace-nowrap text-ellipsis max-w-[200px] sm:max-w-[320px] md:max-w-[450px] overflow-hidden">
          {file.filename}
        </p>
      </div>
      <div className="flex justify-center">
        <span className="text-emerald-600">{file.additions}</span>
      </div>
      <div className="flex justify-center">
        <span className="text-red-400">{file.deletions}</span>
      </div>
    </>
  );
};

const CommitDetails = ({ sha, display }: { sha: string; display: boolean }) => {
  const { data, isLoading, isError } = useOneCommit({ sha });

  if (!data || isLoading || isError || data.type === "error")
    return <DetailsSkeleton />;

  const { paddedDay, paddedHour, paddedMinute, paddedMonth, year } =
    decomposeDate(data.commit.committer.date);

  return (
    <div
      className={clsx(
        "w-full mt-4",
        display ? "h-fit opacity-100" : "h-0 opacity-0"
      )}
    >
      <p className="text-stone-500 italic text-sm">{`${paddedDay}-${paddedMonth}-${year} ${paddedHour}:${paddedMinute}`}</p>
      <p className="text-stone-400">{data.commit.message}</p>
      <p className="text-stone-400 font-bold mt-4">File changes</p>
      <div className={clsx("grid", styles.detailsGrid)}>
        {data.files.map((file) => (
          <FileDetails key={file.filename} file={file} />
        ))}
      </div>
    </div>
  );
};

export const CommitCard = ({ commit }: { commit: CommitInfo }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const { isLoading } = useOneCommit({
    sha: commit.sha,
    enabled: displayDetails,
  });

  const handleToggle = useCallback(() => {
    setDisplayDetails(!displayDetails);
  }, [setDisplayDetails, displayDetails]);

  const handleCopyClipboard = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      navigator.clipboard.writeText(commit.sha);
    },
    [commit.sha]
  );

  useEffect(() => {}, []);

  return (
    <div
      className={clsx(
        "bg-zinc-900 p-4 rounded-md border shadow-md transition-colors hover:border-emerald-600",
        displayDetails ? "border-emerald-700" : "border-zinc-700",
        isLoading && displayDetails && "animate-pulse"
      )}
    >
      <div className="flex justify-between">
        {displayDetails ? (
          <h1
            className="font-bold flex cursor-pointer text-emerald-600"
            onClick={handleToggle}
          >
            {commit.sha.substring(0, 10)}
            <button
              className="flex justify-center align-middle w-6 h-6 ml-4 transition-colors active:bg-zinc-800"
              onClick={handleCopyClipboard}
            >
              <IconContext.Provider value={{ style: { margin: "auto" } }}>
                <BiCopy />
              </IconContext.Provider>
            </button>
          </h1>
        ) : (
          <h1
            className="text-stone-400 font-bold flex cursor-pointer transition-colors hover:text-emerald-600"
            onClick={handleToggle}
          >
            {commit.sha.substring(0, 10)} -&nbsp;
            <span className="inline-block first-letter:uppercase max-w-[120px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-none text-ellipsis overflow-hidden whitespace-nowrap">
              {commit.commit.message}
            </span>
          </h1>
        )}
        <a
          className="flex gap-4"
          href={`https://github.com/${commit.author.login}`}
        >
          <p className="hidden sm:inline-block text-stone-400 transition-colors underline">
            {commit.author.login}
          </p>
          <img src={commit.committer.avatar_url} className="w-6 rounded" />
        </a>
      </div>
      {displayDetails && (
        <CommitDetails sha={commit.sha} display={displayDetails} />
      )}
    </div>
  );
};
