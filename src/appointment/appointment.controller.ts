import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { AppointmentDto } from "./appointment.dto";
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

    @Patch(':prescription_number')
      async uppdateAppointment(@Param('prescription_number') prescription_number: number, @Body() data: Partial<AppointmentDto>) {
        await this.appoinmentService.update(prescription_number, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Appointment updated successfully',
        };
    }

    @Delete(':prescription_number')
      async deleteAppointment(@Param('prescription_number') prescription_number: number) {
        await this.appoinmentService.destroy(prescription_number);
        return {
          statusCode: HttpStatus.OK,
          message: 'Appointment deleted successfully',
        };
    }




}