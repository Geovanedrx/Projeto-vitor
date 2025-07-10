import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable} from "@nestjs/common"


@Injectable ()
export class OneRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: string){
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }
}
