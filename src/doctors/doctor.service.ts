import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Branch } from "src/branch/branch.entity";
import { Schedule } from "src/schedule/schedule.entity";
import { Repository } from "typeorm";
import { DoctorDto } from "./doctor.dto";
import { Doctor } from "./doctor.entity";

@Injectable()
export class DoctorService{
    constructor(
        @InjectRepository(Doctor) private doctorRepository: Repository<Doctor>,
        @InjectRepository(Branch) private branchRepository: Repository<Branch>,
        @InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>
    ) { }

    async findAll(): Promise<Doctor[]> {
        return await this.doctorRepository.find();
    }

    async create(doctorDto: DoctorDto): Promise<Doctor> {
        try {
            //save branch
            const branch_info = {};
            branch_info["branch_name"] = doctorDto.branch_name;
            const branch = await this.branchRepository.save(branch_info);

            if(branch){
                delete doctorDto.branch_name;
                doctorDto["branch_id"] = branch.branch_id;
            }
            else throw new BadRequestException("Branch not found");

            //save schedule
            const schedule_info = {};
            schedule_info["sat"] = doctorDto.sat;
            schedule_info["sun"] = doctorDto.sun;
            schedule_info["mon"] = doctorDto.mon;
            schedule_info["tue"] = doctorDto.tue;
            schedule_info["wed"] = doctorDto.wed;
            schedule_info["thu"] = doctorDto.thu;
            schedule_info["fri"] = doctorDto.fri;
            const schedule = await this.scheduleRepository.save(schedule_info);

            if(schedule){
                delete doctorDto.sat, delete doctorDto.sun, delete doctorDto.mon, delete doctorDto.tue, delete doctorDto.wed, delete doctorDto.thu, delete doctorDto.fri;
            }
            else throw new BadRequestException("Branch not found");
            return await this.doctorRepository.save(doctorDto);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }

    async update(dr_id: number, data: Partial<Doctor>) {
        await this.doctorRepository.update({ dr_id }, data);
        return await this.doctorRepository.findOne({ dr_id });
    }

    async destroy(dr_id: number) {
        await this.doctorRepository.delete({ dr_id });
        return { deleted: true };
    }


}