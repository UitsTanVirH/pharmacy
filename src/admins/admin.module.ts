import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), PassportModule, JwtModule.register({
    secret: 'secret12356789',
    signOptions: { expiresIn: 60 * 60 },
  })],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
})
export class AdminModule { }