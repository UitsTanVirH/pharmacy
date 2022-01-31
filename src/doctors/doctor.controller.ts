import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { DoctorDto } from "./doctor.dto";
import { Doctor } from "./doctor.entity";
import { DoctorService } from "./doctor.service";

@Controller('doctor')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService){}

    @Post()
    create(@Body() doctor: Doctor): Promise<any> {
        return this.doctorService.create(doctor);
    }

    @Get()
    index(): Promise<Doctor[]> {
        return this.doctorService.findAll();
    }

    @Patch(':id')
      async uppdateDoctor(@Param('id') id: number, @Body() data: Partial<DoctorDto>) {
        await this.doctorService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Doctor updated successfully',
        };
    }

    @Delete(':id')
    async deleteDoctor(@Param('id') id: number) {
        await this.doctorService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Doctor deleted successfully',
        };
    }
}