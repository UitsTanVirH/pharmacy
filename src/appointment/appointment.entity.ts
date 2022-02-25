import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "src/patients/patient.entity";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    appointment_id: number;

    @ApiProperty()
    @Column('varchar', { length: 32 })
    prescription_number: number;

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
    @Column('varchar', { length: 25 })
    created_by: string;

    @ApiProperty()
    @Column('tinyint')
    appointment_status: number;

    @ApiProperty()
    @Column('int')
    customer_id: number;

    @ApiProperty()
    @Column('int')
    patient_id: number;

    @OneToOne(() => Patient, patient => patient.appointment)
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

}