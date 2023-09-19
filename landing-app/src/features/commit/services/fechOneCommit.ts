import { AxiosError } from "axios";
import { httpCient } from "../../../lib/axios.client";
import {
  QueryReturn,
  Response,
} from "../../../common/interfaces/api.interface";

export interface OneCommitAuthor {
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
  date: string;
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

export interface File {
  sha: string;
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
  patch: string;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}

export interface Stats {
  total: number;
  additions: number;
  deletions: number;
}

export interface OneCommit {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author: OneCommitAuthor;
  committer: OneCommitAuthor;
  parents: Parent[];
  stats: Stats;
  files: File[];
}

export async function fecthOneCommit(
  sha: string
): Promise<QueryReturn<OneCommit>> {
  try {
    const res = await httpCient.get<Response<OneCommit>>(`commit/${sha}`);
    return { type: "success", ...res.data.data };
  } catch (error) {
    const err = error as AxiosError;
    return { type: "error", data: err };
  }
}
