import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "./admin.entity";

@Injectable()
export class AdminService{
    constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>) { }

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
}