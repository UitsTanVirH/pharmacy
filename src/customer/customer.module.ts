import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "./customer.controller";
import { Customer } from "./customer.entity";
import { CustomerService } from "./customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customer]), JwtModule.register({
        secret: 'secret',
        signOptions: {
          expiresIn: '1d'
        }
      })],
      controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule{}