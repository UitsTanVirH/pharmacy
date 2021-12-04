import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admins/admin.module';
import { AppointmentModule } from './appointment/appointment.module';
import { DoctorModule } from './doctors/doctor.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'tanvir',
    password: '08272829',
    database: 'pharmacy',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), AdminModule, DoctorModule, ScheduleModule, AppointmentModule],
})
export class AppModule {}
