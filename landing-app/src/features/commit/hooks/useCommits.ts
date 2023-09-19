import { useQuery } from "@tanstack/react-query";
import { fetchAllCommits } from "../services/fetchAllCommits";

export const useAllCommits = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["commits"],
    queryFn: fetchAllCommits,
  });
  return { data, isError, isLoading };
};
