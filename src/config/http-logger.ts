import { Module } from "@nestjs/common";
import { Request, Response } from "express";
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        name: "API",
        autoLogging: true,
        transport: {
          target: "pino-pretty",
          options: {
            colorize: false,
            ignore: "pid,hostname",
            translateTime: "SYS:HH:MM:ss",
            singleLine: true
          }
        },
        serializers: {
          req(value: Request) {
            return `${value.method} - ${value.url}`;
          },
          res(value: Response) {
            return `${value.statusCode}`
          }
        }
      },
    })
  ],
  exports: [
    LoggerModule
  ]
})
export class HttpLogger { }
