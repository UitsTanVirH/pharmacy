import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Appointment } from "./appointment.entity";
import { Patient } from "src/patients/patient.entity";

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

    public fetch(patientId: patient): Promise<any> {
        return this.keyRepository.createQueryBuilder('key')
          .innerJoinAndMapOne('key.user', User, 'user', 'key.id = user.keyId')
          .where('user.userId = :userId', { userId: 1 }) // or you can change condition to 'key.userId = :userId' because of you have `userId` in Key
          .getMany(); 
      }
}