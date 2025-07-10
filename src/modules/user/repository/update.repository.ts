import { PrismaService } from "src/shared/databases/prisma.database";
import { Injectable } from "@nestjs/common"
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()

export class UpdateRepository {
    constructor(private readonly prisma: PrismaService) { }



    async findUpdate(id: string, data: UpdateUserDto) {

        return this.prisma.user.update(
            {
                where: { id }, data
            }

        );
    }


}


