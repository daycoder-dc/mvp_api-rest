import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@/app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    autoFlushLogs: true,
    bufferLogs: true,
    rawBody: true
  });

  await app.listen(parseInt(process.env.PORT!), () => {
    console.log("------------------------------------------");
    console.log(`  🟢 API SERVICE RUNNING 🚀`);
    console.log(`  🔗 URL: http://localhost:${process.env.PORT}`);
    console.log("------------------------------------------");
  });
}

bootstrap();
