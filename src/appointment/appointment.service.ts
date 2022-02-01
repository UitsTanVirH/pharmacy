import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Appointment } from "./appointment.entity";
import { Patient } from "src/patients/patient.entity";
import { AppointmentDto } from "./appointment.dto";
import { Customer } from "src/customer/customer.entity";

@Injectable()
export class AppointmentService {
    constructor(
        @InjectRepository(Appointment) private appointmentRepository: Repository<Appointment>,
        @InjectRepository(Patient) private patientRepository: Repository<Patient>,
        @InjectRepository(Customer) private customerRepository: Repository<Customer>,
    ) { }

    async findAll(): Promise<Appointment[]> {
        return await this.appointmentRepository.find();
    }

    async create(appointmentDto: AppointmentDto): Promise<Appointment> {
        try {
            // patient save
            const patient_info = {};
            patient_info["patient_name"] = appointmentDto.patient_name;
            patient_info["patient_photo"] = appointmentDto.patient_photo;
            const patient = await this.patientRepository.save(patient_info);
            if (patient) {
                delete appointmentDto.patient_name;
                delete appointmentDto.patient_photo;
                appointmentDto["patient_id"] = patient.patient_id;
                // find customer
                let customer = await this.customerRepository.findOne({
                    "where": {
                        "customer_phone": appointmentDto.customer_phone
                    }
                })
                if (!customer) {
                    // save customer
                    const customer_info = {};
                    customer_info["customer_phone"] = appointmentDto.customer_phone;
                    customer = await this.customerRepository.save(customer_info);
                }
                delete appointmentDto.customer_phone;
                appointmentDto["customer_id"] = customer.customer_id;
                return await this.appointmentRepository.save(appointmentDto);
            }
            // send message
            return null;
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