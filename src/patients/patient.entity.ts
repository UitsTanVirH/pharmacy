import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "src/appointment/appointment.entity";

@Entity()
export class Patient{
    @PrimaryGeneratedColumn()
    patient_id: number;

    @ApiProperty()
    @Column('varchar', {length: 255})
    patient_name: string;

    @ApiProperty()
    @Column('varchar', {length: 255})
    patient_photo: string;

    @ManyToOne(() => Appointment, appointment => appointment.patient)
    appointment: Appointment;
    
}