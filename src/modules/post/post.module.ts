import { Logger, Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

import * as UseCase from "./use-case"
import * as Repository from "./repository"
import { PrismaService } from 'src/shared/databases/prisma.database';

const useCases = Object.values(UseCase);
const repositories = Object.values(Repository);


@Module({
  controllers: [PostController],
  providers: [PostService, Logger, PrismaService, ...useCases, ...repositories],
})
export class PostModule {}
