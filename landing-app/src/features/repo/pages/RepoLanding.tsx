import { RepoCard } from "../components/RepoCard";
import { useRepo } from "../hooks/useRepo";

export const RepoLanding = () => {
  const { data, isError, isLoading } = useRepo();

  console.log(data);
  if (isLoading) return <>CARGANDOOOOO</>;
  if (!data || isError) return <>ERROOOOR</>;
  if (data.type === "error") return <>ERRRORRRR</>;

  return (
    <div className="">
      <RepoCard />
      <p>{data.name}</p>
    </div>
  );
};
