import { Body, Controller, Get, Post } from "@nestjs/common";
import { Schedule } from "./schedule.entity";
import { ScheduleService } from "./schedule.service";

@Controller('schedule')
export class ScheduleController{
    constructor(private readonly scheduleService: ScheduleService){}

    @Post()
    create(@Body() schedule: Schedule): Promise<any> {
        return this.scheduleService.create(schedule);
    }

    @Get()
    index(): Promise<Schedule[]> {
        return this.scheduleService.findAll();
    }
    
}