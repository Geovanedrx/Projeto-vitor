import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable} from "@nestjs/common"


@Injectable ()
export class OneRepositoryPost {
    constructor(private readonly prisma: PrismaService) {}

    async findOnePost (id: string){
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }
}
