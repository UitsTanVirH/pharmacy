import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('varchar', { length: 255 })
    admin_name: string

    @ApiProperty()
    @Column('varchar', { length: 80 })
    admin_email: string

    @ApiProperty()
    @Column('varchar', { length: 25 })
    admin_phoneNo: string

    @ApiProperty()
    @Column('varchar', { length: 25 })
    admin_password: string

    @ApiProperty()
    @Column('text')
    admin_address: string

    @ApiProperty()
    @Column('varchar', { length: 255 })
    admin_photo: string

    @ApiProperty()
    @Column('tinyint')
    admin_status: number
    
}