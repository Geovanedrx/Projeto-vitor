import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable } from "@nestjs/common"

@Injectable()

 export class RemoveRepositoryPost {
    constructor(private readonly prisma: PrismaService) {}

    async FindRemovePost (id: string){

    return this.prisma.user.delete(
        {
            where: {id}
        }
    );

    }

 }
