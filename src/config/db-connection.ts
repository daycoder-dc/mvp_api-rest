import { TypeOrmModule } from "@nestjs/typeorm";
import { minutes } from "@nestjs/throttler";
import { Module } from "@nestjs/common";
import { entities } from "@/database";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.PG_HOST!,
      port: parseInt(process.env.PG_PORT!),
      username: process.env.PG_USER!,
      password: process.env.PG_PASS!,
      database: process.env.PG_DB,
      synchronize: process.env.PG_SYNC! == "true",
      poolSize: parseInt(process.env.PG_POOL!),
      logging: false,
      cache: {
        type: "redis",
        duration: minutes(5),
        options: {
          socket: {
            host: process.env.RD_HOST!,
            port: parseInt(process.env.RD_PORT!)
          },
          password: process.env.RD_PASS!
        }
      },
      entities: entities
    })
  ],
  exports: [
    TypeOrmModule
  ]
})
export class DatabaseConnection { }
