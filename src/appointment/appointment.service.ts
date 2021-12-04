import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Appointment } from "./appointment.entity";

@Injectable()
export class AppointmentService{
    constructor(@InjectRepository(Appointment) private appointmentRepository: Repository<Appointment>) { }
    
    async findAll(): Promise<Appointment[]> {
        return await this.appointmentRepository.find();
    }

    async create(appointment: Appointment): Promise<Appointment> {
        try {
            return await this.appointmentRepository.save(appointment);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }
}