import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty()
    admin_name: string

    @ApiProperty()
    admin_email: string

    @ApiProperty()
    admin_phoneNo: string

    @ApiProperty()
    admin_password: string

    @ApiProperty()
    admin_address: string

    @ApiProperty()
    admin_photo: string
}