import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    customer_id: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    customer_phone: string;
}