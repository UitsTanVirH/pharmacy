import { Body, Controller, Get, Post } from "@nestjs/common";
import { Branch } from "./branch.entity";
import { BranchService } from "./branch.service";

@Controller('branch')
export class BranchController {
    constructor(private readonly branchService: BranchService) { }

    @Post()
    create(@Body() branch: Branch): Promise<any> {
        return this.branchService.create(branch);
    }

    @Get()
    index(): Promise<Branch[]> {
        return this.branchService.findAll();
    }

}