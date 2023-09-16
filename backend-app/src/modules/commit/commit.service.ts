import { EnvKey } from '@config/env.config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CommitInfo } from './dto/all-commits.dto';

@Injectable()
export class CommitService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly _http: HttpService,
  ) {}
  async findAll() {
    const url = `${this._configService.getOrThrow(EnvKey.BASE_URL)}/commits`;
    const { data } = await firstValueFrom(this._http.get<CommitInfo[]>(url));
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
