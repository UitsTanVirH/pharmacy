import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Patient } from "./patient.entity";

@Injectable()
export class PatientService {
    constructor(@InjectRepository(Patient) private patientRepository: Repository<Patient>) { }

    async findAll(): Promise<Patient[]> {
        return await this.patientRepository.find();
    }

    async create(patient: Patient): Promise<Patient> {
        try {
            return await this.patientRepository.save(patient);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }
}