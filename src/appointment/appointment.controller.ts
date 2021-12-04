import { Body, Controller, Get, Post } from "@nestjs/common";
import { Appointment } from "./appointment.entity";
import { AppointmentService } from "./appointment.service";

@Controller('appointment')
export class AppointmentController{
    constructor(private readonly appoinmentService: AppointmentService){}

    @Post()
    create(@Body() appoinment: Appointment): Promise<any> {
        return this.appoinmentService.create(appoinment);
    }

    @Get()
    index(): Promise<Appointment[]> {
        return this.appoinmentService.findAll();
    }


}