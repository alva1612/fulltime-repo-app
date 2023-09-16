import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CommitService } from './commit.service';
import { ResponseAllCommits } from './dto/all-commits.dto';
import { ApiResponseInterceptor } from '@common/interceptors/api-response.interceptor';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor, ApiResponseInterceptor)
  async findAll() {
    const data = await this.commitService.findAll();
    return new ResponseAllCommits(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commitService.findOne(+id);
  }
}
