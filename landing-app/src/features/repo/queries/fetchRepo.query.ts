import { AxiosError } from "axios";
import { Response } from "../../../common/interfaces/api.interface";
import { httpCient } from "../../../lib/axios.client";

export interface ResponseOwner {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  starred_url: string;
  repos_url: string;
  type: string;
}

export interface RepoData {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: ResponseOwner;
  description: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  clone_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  topics: unknown[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  network_count: number;
  subscribers_count: number;
}

type QueryReturn<T> =
  | ({ type: "success" } & T)
  | { type: "error"; data: AxiosError };

export async function fetchRepo(): Promise<QueryReturn<RepoData>> {
  try {
    const res = await httpCient.get<Response<RepoData>>("repo");
    return { type: "success", ...res.data.data };
  } catch (error) {
    const err = error as AxiosError;
    return { type: "error", data: err };
  }
}
