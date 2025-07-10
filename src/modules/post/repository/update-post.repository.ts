import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable } from "@nestjs/common"
import { UpdatePostDto } from "../dto/update-post.dto";

@Injectable()

export class UpdateRepositoryPost {
    constructor(private readonly prisma: PrismaService) { }



    async findUpdate(id: string, data: UpdatePostDto) {

        return this.prisma.user.update(
            {
                where: { id }, data
            }

        );
    }


}


