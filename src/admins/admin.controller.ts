import { Body, Controller, Get, Post } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";

@Controller()
export class AdminController{
    constructor(private readonly adminService: AdminService){}

    @Post()
    create(@Body() admin: Admin): Promise<any> {
        return this.adminService.create(admin);
    }

    @Get()
    index(): Promise<Admin[]> {
        return this.adminService.findAll();
    }

}