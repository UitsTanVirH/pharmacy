import { ApiProperty } from "@nestjs/swagger";
import { Branch } from "src/branch/branch.entity";
import { Schedule } from "src/schedule/schedule.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor{
    @PrimaryGeneratedColumn()
    dr_id: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    dr_name: string;

    @ApiProperty()
    @Column('varchar', { length: 80 })
    dr_email: string;

    @ApiProperty()
    @Column('varchar', { length: 25 })
    dr_phone: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    dr_designation: string;

    @ApiProperty()
    @Column('text')
    dr_overview: string;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    dr_photo: string;

    @ApiProperty()
    @Column('tinyint')
    dr_status: number;

    @ManyToMany(() => Branch, branch => branch.doctor)
    branch: Branch[];
}