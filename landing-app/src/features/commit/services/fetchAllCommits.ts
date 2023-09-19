import { AxiosError } from "axios";
import {
  QueryReturn,
  Response,
} from "../../../common/interfaces/api.interface";
import { httpCient } from "../../../lib/axios.client";

export interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Commit {
  author: CommitAuthor;
  committer: CommitAuthor;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface CommitAuthor {
  name: string;
  email: string;
  date: Date;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}
export interface CommitInfo {
  sha: string;
  commit: Commit;
  url: string;
  author: Author;
  committer: Author;
  parents: Parent[];
}

export interface AllCommits {
  commits: CommitInfo[];
}

export async function fetchAllCommits(): Promise<QueryReturn<AllCommits>> {
  try {
    const res = await httpCient.get<Response<AllCommits>>("commit");
    return { type: "success", ...res.data.data };
  } catch (error) {
    const err = error as AxiosError;
    return { type: "error", data: err };
  }
}
