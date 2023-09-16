import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { RepoService } from './repo.service';
import { ResponseRepo } from './dto';
import { ApiResponseInterceptor } from '@common/interceptors/api-response.interceptor';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor, ApiResponseInterceptor)
  async findThisOne() {
    const data = await this.repoService.findThisRepo();
    return new ResponseRepo(data);
  }
}
