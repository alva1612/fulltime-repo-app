import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CommitService } from './commit.service';
import { ResponseAllCommits } from './dto/all-commits.dto';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    const data = await this.commitService.findAll();
    return new ResponseAllCommits(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commitService.findOne(+id);
  }
}
