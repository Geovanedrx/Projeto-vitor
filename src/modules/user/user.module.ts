import {Logger, Module} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {PrismaService} from '../../shared/databases/prisma.database';

import * as UseCase from './use-case';
import * as Repository from './repository';

const useCases = Object.values(UseCase);
const repositories = Object.values(Repository);

@Module({
  controllers: [UserController],
  providers: [UserService, Logger, PrismaService, ...useCases, ...repositories],
})
export class UserModule {}
