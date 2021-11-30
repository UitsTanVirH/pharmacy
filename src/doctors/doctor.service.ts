import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Doctor } from "./doctor.entity";

@Injectable()
export class DoctorService{
    constructor(@InjectRepository(Doctor) private doctorRepository: Repository<Doctor>) { }

    async findAll(): Promise<Doctor[]> {
        return await this.doctorRepository.find();
    }

    async create(doctor: Doctor): Promise<Doctor> {
        try {
            return await this.doctorRepository.save(doctor);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }
}