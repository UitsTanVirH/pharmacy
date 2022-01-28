import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Schedule{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('int')
    dr_id: number;

    @ApiProperty()
    @Column('date', { nullable: true })
    sat: Date;

    @ApiProperty()
    @Column('date', { nullable: true } )
    sun: Date;

    @ApiProperty()
    @Column('date', { nullable: true })
    mon: Date;

    @ApiProperty()
    @Column('date', { nullable: true })
    tue: Date;

    @ApiProperty()
    @Column('date', { nullable: true })
    wed: Date;

    @ApiProperty()
    @Column('date', { nullable: true })
    thu: Date;

    @ApiProperty()
    @Column('date', { nullable: true })
    fri: Date;
}