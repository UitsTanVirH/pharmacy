import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('int')
    dr_id: number;

    @ApiProperty()
    @Column('date')
    appointment_date: number;

    @ApiProperty()
    @Column('time')
    appointment_time: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    patient_name: string;

    @ApiProperty()
    @Column('varchar', { length: 25 })
    user_phoneNo: string;

    @ApiProperty()
    @Column('varchar', { length: 25 })
    created_by: string;

    @ApiProperty()
    @Column('tinyint')
    appointment_status: number;
    
}