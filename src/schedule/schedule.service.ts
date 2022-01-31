import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Schedule } from "./schedule.entity";

@Injectable()
export class ScheduleService{
    constructor(@InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>) { }

    async findAll(): Promise<Schedule[]> {
        return await this.scheduleRepository.find();
    }

    async create(schedule: Schedule): Promise<Schedule> {
        try {
            return await this.scheduleRepository.save(schedule);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }

    async update(dr_id: number, data: Partial<Schedule>) {
        await this.scheduleRepository.update({ dr_id }, data);
        return await this.scheduleRepository.findOne({ dr_id });
    }

    async destroy(dr_id: number) {
        await this.scheduleRepository.delete({ dr_id });
        return { deleted: true };
    }
}
