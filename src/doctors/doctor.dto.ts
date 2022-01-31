import { ApiProperty } from '@nestjs/swagger';

export class DoctorDto{
    @ApiProperty()
    dr_name: string;

    @ApiProperty()
    dr_email: string;

    @ApiProperty()
    dr_phone: string;

    @ApiProperty()
    dr_designation: string;

    @ApiProperty()
    dr_overview: string;

    @ApiProperty()
    dr_photo: string;

    @ApiProperty()
    dr_status: number;
}