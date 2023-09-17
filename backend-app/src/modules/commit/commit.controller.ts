import { Controller, Get, Param } from '@nestjs/common';
import { CommitService } from './commit.service';
import { ResponseAllCommits } from './dto/all-commits.dto';
import { useClassSerializer } from '@common/decorators/useClassSerialiazer.decorator';
import { OneCommit } from './dto/one-commit.dto';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get()
  @useClassSerializer()
  async findAll() {
    const data = await this.commitService.findAll();
    return new ResponseAllCommits(data);
  }

  @Get(':sha')
  @useClassSerializer()
  async findOne(@Param('sha') sha: string) {
    const data = await this.commitService.findOne(sha);
    return new OneCommit(data);
  }
}
