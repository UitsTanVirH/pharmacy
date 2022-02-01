import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty()
    admin_phoneNo: string

    @ApiProperty()
    admin_password: string
}