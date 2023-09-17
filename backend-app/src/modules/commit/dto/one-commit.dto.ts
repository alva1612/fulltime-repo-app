import { Expose, plainToInstance } from 'class-transformer';

export class OneCommitAuthor {
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

export class Commit {
  author: CommitAuthor;
  committer: CommitAuthor;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export class CommitAuthor {
  name: string;
  email: string;
  date: Date;
}

export class Tree {
  sha: string;
  url: string;
}

export class Verification {
  verified: boolean;
  reason: string;
  signature: null;
  payload: null;
}

export class File {
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

export class Parent {
  sha: string;
  url: string;
  html_url: string;
}

export class Stats {
  total: number;
  additions: number;
  deletions: number;
}

export class OneCommit {
  @Expose()
  sha: string;
  @Expose()
  node_id: string;
  @Expose()
  commit: Commit;
  @Expose()
  url: string;
  @Expose()
  html_url: string;
  @Expose()
  comments_url: string;
  @Expose()
  author: OneCommitAuthor;
  @Expose()
  committer: OneCommitAuthor;
  @Expose()
  parents: Parent[];
  @Expose()
  stats: Stats;
  @Expose()
  files: File[];

  constructor(partials: Partial<OneCommit>[]) {
    const instance = plainToInstance(OneCommit, partials, {
      excludeExtraneousValues: true,
    });

    Object.assign(this, instance);
  }
}
