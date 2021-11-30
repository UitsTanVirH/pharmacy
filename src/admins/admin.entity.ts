import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    name: string

    @ApiProperty()
    @Column('varchar', { length: 80 })
    email: string

    @ApiProperty()
    @Column('varchar', { length: 25 })
    phoneNo: string

    @ApiProperty()
    @Column('varchar', { length: 25 })
    password: string

    @ApiProperty()
    @Column('text')
    address: string

    @ApiProperty()
    @Column('varchar', { length: 255 })
    photo: string

    @ApiProperty()
    @Column('tinyint')
    status: number
    
}