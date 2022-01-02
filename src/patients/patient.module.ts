import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PatientController } from "./patient.controller";
import { Patient } from "./patient.entity";
import { PatientService } from "./patient.service";

@Module({
    imports: [TypeOrmModule.forFeature([Patient]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [PatientController],
    providers: [PatientService],
})
export class PatientModule{}