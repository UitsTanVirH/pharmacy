import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "src/customer/customer.entity";
import { Patient } from "src/patients/patient.entity";
import { PatientModule } from "src/patients/patient.module";
import { PatientService } from "src/patients/patient.service";
import { AppointmentController } from "./appointment.controller";
import { Appointment } from "./appointment.entity";
import { AppointmentService } from "./appointment.service";


@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), JwtModule.register({
    secret: 'secret',
    signOptions: {
      expiresIn: '1d'
    }
  }), TypeOrmModule.forFeature([Patient]), TypeOrmModule.forFeature([Customer])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule { }