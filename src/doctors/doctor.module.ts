import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorController } from "./doctor.controller";
import { Doctor } from "./doctor.entity";
import { DoctorService } from "./doctor.service";

@Module({
    imports: [TypeOrmModule.forFeature([Doctor]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [DoctorController],
    providers: [DoctorService],
})
export class DoctorModule{}