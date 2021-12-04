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
    @Column('timestamp')
    dr_scedule: string;

}