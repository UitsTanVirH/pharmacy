import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BranchController } from "./branch.controller";
import { Branch } from "./branch.entity";
import { BranchService } from "./branch.service";

@Module({
    imports: [TypeOrmModule.forFeature([Branch]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
      controllers: [BranchController],
    providers: [BranchService],
})
export class BranchModule{}