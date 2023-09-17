import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ENV, EnvSchema } from './config/env.config';
import { RepoModule } from './modules/repo/repo.module';
import { CommitModule } from './modules/commit/commit.module';
import { LoggerMiddleware } from '@common/middlewares/logger.middleware';

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
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
