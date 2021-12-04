import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScheduleController } from "./schedule.controller";
import { Schedule } from "./schedule.entity";
import { ScheduleService } from "./schedule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Schedule]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [ScheduleController],
    providers: [ScheduleService],
})
export class ScheduleModule{}