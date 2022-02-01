import { ApiProperty } from '@nestjs/swagger';

export class AppointmentDto {
    @ApiProperty()
    prescription_number: number;

    @ApiProperty()
    dr_id: number;

    @ApiProperty()
    appointment_date: number;

    @ApiProperty()
    appointment_time: number;

    @ApiProperty()
    created_by: string;

    @ApiProperty()
    appointment_status: number;

    @ApiProperty()
    customer_phone: string;

    @ApiProperty()
    patient_name: string;

    @ApiProperty()
    patient_photo: string;
}