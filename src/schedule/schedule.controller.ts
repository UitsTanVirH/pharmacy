import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ScheduleDto } from "./schedule.dto";
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

    @Patch(':dr_id')
      async uppdateSchedule(@Param('dr_id') dr_id: number, @Body() data: Partial<ScheduleDto>) {
        await this.scheduleService.update(dr_id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Schedule updated successfully',
        };
    }

    @Delete(':dr_id')
    async deleteSchedule(@Param('dr_id') dr_id: number) {
        await this.scheduleService.destroy(dr_id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Schedule deleted successfully',
        };
    }


    
}