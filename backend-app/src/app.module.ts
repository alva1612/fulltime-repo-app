import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ENV, EnvSchema } from './config/env.config';
import { RepoModule } from './modules/repo/repo.module';
import { CommitModule } from './modules/commit/commit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ENV],
      validationSchema: EnvSchema,
    }),
    RepoModule,
    CommitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
