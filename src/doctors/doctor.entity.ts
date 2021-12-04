import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor{
    @PrimaryGeneratedColumn()
    id: number;

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
   
}