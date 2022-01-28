import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LoginDto } from "./admin.dto";
import { Admin } from "./admin.entity";

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>, private readonly jwtService: JwtService) { }

    async findAll(): Promise<Admin[]> {
        return await this.adminRepository.find();
    }

    async create(admin: Admin): Promise<Admin> {
        try {
            return await this.adminRepository.save(admin);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }

    async validateAdmin(phone: string, pass: string): Promise<any> {
        const admin = await this.adminRepository.findOne({
            where: {
                "admin_phoneNo": phone
            }
        });
        if (admin && admin.admin_password === pass) {
            return admin;
        }
        return null;
    }

    async login(phone: string, pass: string) {
        return this.validateAdmin(phone, pass).then((userData) => {
            if (!userData) {
                return { status: 404 };
            }

            let payload = { phone: userData.admin_phoneNo, sub: userData.id };
            const accessToken = this.jwtService.sign(payload);

            delete userData.admin_password;
            return {
                expires_in: 3600,
                access_token: accessToken,
                data: userData,
                status: 200
            };

        });
    }

    async update(id: number, data: Partial<LoginDto>) {
        await this.adminRepository.update({ id }, data);
        return await this.adminRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.adminRepository.delete({ id });
        return { deleted: true };
    }

}