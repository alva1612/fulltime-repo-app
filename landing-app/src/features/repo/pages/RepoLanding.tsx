import { useQuery } from "@tanstack/react-query";
import { ENV } from "../../../env";
import { fetchRepo } from "../queries/fetchRepo.query";

export const RepoLanding = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repo", ENV.REPO],
    queryFn: fetchRepo,
  });

  console.log(data);
  if (isLoading) return <>CARGANDOOOOO</>;
  if (!data || isError) return <>ERROOOOR</>;
  if (data.type === "error") return <>ERRRORRRR</>;

  return (
    <div className="">
      <p>{data.name}</p>
    </div>
  );
};
