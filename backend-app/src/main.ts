import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiResponseInterceptor } from '@common/interceptors/api-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:5173'] });
  app.useGlobalInterceptors(new ApiResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
