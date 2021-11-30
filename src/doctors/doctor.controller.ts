import { Body, Controller, Get, Post } from "@nestjs/common";
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

    
}