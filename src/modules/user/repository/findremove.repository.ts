import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable } from "@nestjs/common"

@Injectable()

 export class RemoveRepository {
    constructor(private readonly prisma: PrismaService) {}

    async FindRemove(id: string){

    return this.prisma.user.delete(
        {
            where: {id}
        }
    );

    }

 }
