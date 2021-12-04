import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppointmentController } from "./appointment.controller";
import { Appointment } from "./appointment.entity";
import { AppointmentService } from "./appointment.service";


@Module({
    imports: [TypeOrmModule.forFeature([Appointment]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [AppointmentController],
    providers: [AppointmentService],
})
export class AppointmentModule{}