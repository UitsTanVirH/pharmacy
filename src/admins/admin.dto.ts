import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    password: string;
}