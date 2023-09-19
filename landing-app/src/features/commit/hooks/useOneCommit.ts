import { useQuery } from "@tanstack/react-query";
import { fecthOneCommit } from "../services/fechOneCommit";

interface HookParams {
  sha: string;
  enabled?: boolean;
}
export const useOneCommit = ({ sha, enabled = true }: HookParams) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["commits", sha],
    queryFn: () => fecthOneCommit(sha),
    enabled,
  });
  return { data, isError, isLoading };
};
