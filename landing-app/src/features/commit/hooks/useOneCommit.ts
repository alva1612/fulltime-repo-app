import { useQuery } from "@tanstack/react-query";
import { fecthOneCommit } from "../services/fechOneCommit";

interface HookParams {
  sha: string;
}
export const useOneCommit = ({ sha }: HookParams) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["commits", sha],
    queryFn: () => fecthOneCommit(sha),
  });
  return { data, isError, isLoading };
};
