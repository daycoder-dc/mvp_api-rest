import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { AppModule } from '@/app/app.module';
import { NestFactory } from '@nestjs/core';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { HttpExceptionFilter } from './config/http-exception';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    autoFlushLogs: true,
    bufferLogs: true,
    rawBody: true
  });

  app.set("trust proxy", 1);
  app.setGlobalPrefix("api");

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: "v"
  });

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true
  });

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter);
  app.useBodyParser("urlencoded", { extends: true });
  app.useBodyParser("json", { limit: "50mb" });


  await app.listen(parseInt(process.env.PORT!), () => {
    console.log("");
    console.log("-------------------------------------------------");
    console.log(` 🟢 API SERVICE RUNNING 🚀`);
    console.log(` 🔗 URL: http://localhost:${process.env.PORT}`);
    console.log("-------------------------------------------------");
    console.log("");
  });
}

bootstrap();
