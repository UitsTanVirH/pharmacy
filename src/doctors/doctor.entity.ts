import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Injectable()
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