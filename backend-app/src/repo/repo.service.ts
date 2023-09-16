import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { EnvKey } from 'src/config/env.config';
import { firstValueFrom } from 'rxjs';
import { FetchRepo } from './interfaces/fetchRepo.interface';

@Injectable()
export class RepoService {
  constructor(
    private readonly _http: HttpService,
    private readonly _configService: ConfigService,
  ) {}

  async findThisRepo() {
    const url = this._configService.getOrThrow(EnvKey.BASE_URL);
    const { data } = await firstValueFrom(this._http.get<FetchRepo>(`${url}`));
    return data;
  }
}
