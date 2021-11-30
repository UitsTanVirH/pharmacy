import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";

@Module({
    imports: [TypeOrmModule.forFeature([Admin]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule{}