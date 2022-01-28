import { Body, Controller, Get, Post } from "@nestjs/common";
import { Customer } from "./customer.entity";
import { CustomerService } from "./customer.service";

@Controller('customer')
export class CustomerController{
    constructor(private readonly customerService: CustomerService){}

    @Post()
    create(@Body() customer: Customer): Promise<any> {
        return this.customerService.create(customer);
    }

    @Get()
    index(): Promise<Customer[]> {
        return this.customerService.findAll();
    }

    
}