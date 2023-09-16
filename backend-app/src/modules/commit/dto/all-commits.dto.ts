import { Expose, plainToInstance } from 'class-transformer';

export class Author {
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

export class Parent {
  sha: string;
  url: string;
  html_url: string;
}
export class CommitInfo {
  @Expose()
  sha: string;
  @Expose()
  commit: Commit;
  @Expose()
  url: string;
  @Expose()
  author: Author;
  @Expose()
  committer: Author;
  @Expose()
  parents: Parent[];
}

export class ResponseAllCommits {
  @Expose()
  commits: CommitInfo[];

  constructor(partials: Partial<CommitInfo>[]) {
    const instanceArray = partials.map((partial) => {
      const instance = plainToInstance(CommitInfo, partial, {
        excludeExtraneousValues: true,
      });
      return instance;
    });
    this.commits = instanceArray;
  }
}
