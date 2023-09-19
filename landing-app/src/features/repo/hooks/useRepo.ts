import { useQuery } from "@tanstack/react-query";
import { fetchRepo } from "../services/fetchRepo";
import { ENV } from "../../../env";

export const useRepo = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repo", ENV.REPO],
    queryFn: fetchRepo,
  });
  return { data, isLoading, isError };
};
