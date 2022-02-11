import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "src/doctors/doctor.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Branch{
    @PrimaryGeneratedColumn()
    branch_id: number;

    @ApiProperty()
    @Column('varchar', { length: 40 })
    branch_name: string;

    @ManyToMany(() => Doctor, doctor => doctor.branch)
    doctor: Doctor[];

}