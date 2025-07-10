import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { CreateUserDto } from '../dto/create-user.dto';


@Injectable()
export class CreateUserRepository {
    constructor(private readonly prisma: PrismaService) {}


  async create(data: CreateUserDto) {

    return this.prisma.user.create({
      data,
    });
  }
    
}
