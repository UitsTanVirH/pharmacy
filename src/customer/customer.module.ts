import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Customer]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })]
})
export class CustomerModule{}