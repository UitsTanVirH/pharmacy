import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('int')
    dr_id: number;

    @ApiProperty()
    @Column('int')
    branch_id: number;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    sat: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    sun: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    mon: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    tue: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    wed: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    thu: Date;

    @ApiProperty()
    @Column('timestamp', { nullable: true })
    fri: Date;
}