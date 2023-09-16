import { Module } from '@nestjs/common';
import { CommitService } from './commit.service';
import { CommitController } from './commit.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CommitController],
  providers: [CommitService],
})
export class CommitModule {}
