import { SocketConnection } from '@/config/socket-connection';
import { DatabaseConnection } from '@/config/db-connection';
import { HttpRateLimit } from '@/config/http-rate-limit';
import { ThrottlerGuard } from '@nestjs/throttler';
import { HttpLogger } from '@/config/http-logger';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DatabaseConnection,
    HttpRateLimit,
    HttpLogger
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    SocketConnection,
  ]
})
export class AppModule { }
