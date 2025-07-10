import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class AllRepositoryPost {
    constructor(private  readonly prisma: PrismaService) {}

    async findAllPost() {

   return this.prisma.user.findMany();

    }
}
