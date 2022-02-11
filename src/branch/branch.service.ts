import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Branch } from "./branch.entity";

@Injectable()
export class BranchService{
    constructor(@InjectRepository(Branch) private branchRepository: Repository<Branch>) { }

    async findAll(): Promise<Branch[]> {
        return await this.branchRepository.find();
    }

    async create(branch: Branch): Promise<Branch> {
        try {
            return await this.branchRepository.save(branch);
        } catch (e) {
            throw new BadRequestException("Invalid request");
        }
    }
}