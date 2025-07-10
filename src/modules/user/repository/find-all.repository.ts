import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class AllRepository {
    constructor(private  readonly prisma: PrismaService) {}

    async findAll() {

   return this.prisma.user.findMany();

    }
}
