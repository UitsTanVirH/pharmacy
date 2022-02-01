import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginDto } from "./admin.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";



@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post()
  create(@Body() admin: Admin): Promise<any> {
    return this.adminService.create(admin);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Post('/login')
  async login(@Body() body: LoginDto) {
    return await this.adminService.login(body.admin_phoneNo, body.admin_password);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<Admin>) {
    await this.adminService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.adminService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }

}