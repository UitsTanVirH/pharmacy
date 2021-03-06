import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admins/admin.module';
import { AppointmentModule } from './appointment/appointment.module';
import { BranchModule } from './branch/branch.module';
import { CustomerModule } from './customer/customer.module';
import { DoctorModule } from './doctors/doctor.module';
import { PatientModule } from './patients/patient.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'pharmacy',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), AdminModule, DoctorModule, ScheduleModule, AppointmentModule, PatientModule, CustomerModule, BranchModule],
})
export class AppModule { }
