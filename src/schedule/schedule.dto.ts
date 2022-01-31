import { ApiProperty } from '@nestjs/swagger';

export class ScheduleDto{
    @ApiProperty()
    dr_id: number;

    @ApiProperty()
    sat: Date;

    @ApiProperty()
    sun: Date;

    @ApiProperty()
    mon: Date;

    @ApiProperty()
    tue: Date;

    @ApiProperty()
    wed: Date;

    @ApiProperty()
    thu: Date;

    @ApiProperty()
    fri: Date;
}