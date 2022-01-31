import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Appointment } from "./appointment.entity";
import { Patient } from "src/patients/patient.entity";
import { AppointmentDto } from "./appointment.dto";

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

    async update(prescription_number: number, data: Partial<AppointmentDto>) {
        await this.appointmentRepository.update({ prescription_number }, data);
        return await this.appointmentRepository.findOne({ prescription_number });
    }

    async destroy(prescription_number: number) {
        await this.appointmentRepository.delete({ prescription_number });
        return { deleted: true };
    }


}