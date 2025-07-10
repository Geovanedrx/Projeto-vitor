import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreatePostDto } from "../dto/create-post.dto";


@Injectable()
export class CreatePostRepository {
    constructor(private readonly prisma: PrismaService) {}


    async create(data: CreatePostDto) {

        return this.prisma.post.create({
            data,
        })

    }



}