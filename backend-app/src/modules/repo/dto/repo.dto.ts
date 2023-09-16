import { Expose, plainToInstance } from 'class-transformer';
import { ResponseOwner } from './owner.dto';

export class ResponseRepo {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  full_name: string;
  @Expose()
  private: boolean;
  @Expose()
  owner: ResponseOwner;
  @Expose()
  description: string;
  @Expose()
  url: string;
  @Expose()
  created_at: Date;
  @Expose()
  updated_at: Date;
  @Expose()
  pushed_at: Date;
  @Expose()
  clone_url: string;
  @Expose()
  stargazers_count: number;
  @Expose()
  watchers_count: number;
  @Expose()
  language: string;
  @Expose()
  forks_count: number;
  @Expose()
  open_issues_count: number;
  @Expose()
  topics: any[];
  @Expose()
  visibility: string;
  @Expose()
  forks: number;
  @Expose()
  open_issues: number;
  @Expose()
  watchers: number;
  @Expose()
  default_branch: string;
  @Expose()
  network_count: number;
  @Expose()
  subscribers_count: number;

  constructor(partial: Partial<ResponseRepo>) {
    const instance = plainToInstance(ResponseRepo, partial, {
      excludeExtraneousValues: true,
    });
    Object.assign(this, instance);
  }
}
