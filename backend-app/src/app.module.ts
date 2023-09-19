import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ENV, EnvSchema } from './config/env.config';
import { RepoModule } from './modules/repo/repo.module';
import { CommitModule } from './modules/commit/commit.module';
import { LoggerMiddleware } from '@common/middlewares/logger.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ENV],
      validationSchema: EnvSchema,
    }),
    CacheModule.register({ ttl: 1000 * 60 * 60 }),
    RepoModule,
    CommitModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,

    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
