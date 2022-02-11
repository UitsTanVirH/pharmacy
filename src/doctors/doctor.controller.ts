import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { DoctorDto } from "./doctor.dto";
import { Doctor } from "./doctor.entity";
import { DoctorService } from "./doctor.service";

@Controller('doctor')
export class DoctorController{
    constructor(private readonly doctorService: DoctorService){}

    @Post()
    create(@Body() doctorDto: DoctorDto): Promise<any> {
        return this.doctorService.create(doctorDto);
    }

    @Get()
    index(): Promise<Doctor[]> {
        return this.doctorService.findAll();
    }

    @Patch(':dr_id')
      async uppdateDoctor(@Param('dr_id') dr_id: number, @Body() data: Partial<DoctorDto>) {
        await this.doctorService.update(dr_id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Doctor updated successfully',
        };
    }

    @Delete(':dr_id')
    async deleteDoctor(@Param('dr_id') dr_id: number) {
        await this.doctorService.destroy(dr_id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Doctor deleted successfully',
        };
    }
}