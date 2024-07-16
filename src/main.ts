import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow cross-origin requests
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
