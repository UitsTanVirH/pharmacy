import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginDto } from "./admin.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";



@Controller()
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() admin: Admin): Promise<any> {
        return this.adminService.create(admin);
    }

    @Get()
    index(): Promise<Admin[]> {
        return this.adminService.findAll();
    }

    @Post('/login')
    async login(@Body() body: LoginDto) {
        return await this.adminService.login(body.phone, body.password);
    }

}