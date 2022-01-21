import { Body, Controller, Get, Post } from "@nestjs/common";
import { Patient } from "./patient.entity";
import { PatientService } from "./patient.service";

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    create(@Body() patient: Patient): Promise<any> {
        return this.patientService.create(patient);
    }

    @Get()
    index(): Promise<Patient[]> {
        return this.patientService.findAll();
    }


}