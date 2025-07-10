import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserUseCase } from './use-case';
import { FindUpdate } from './use-case/find-update.use-case';
import { FindAllUseCase } from './use-case/find-all.use-case';
import { findUnique } from './use-case/find-one.use-case';
import { FindDelete } from './use-case/find-remove.use-case';
;

@Injectable()
export class UserService {
  constructor(private readonly createUserUseCase: CreateUserUseCase, 
              private readonly FindAllUserCase: FindAllUseCase,
               private readonly FindOneUserCase: findUnique, 
              private readonly UpdateUserCase: FindUpdate, 
              private readonly DeleteUserCase:  FindDelete, ) {}

  create(data: CreateUserDto) {
    return this.createUserUseCase.execute(data);
  }

  findAll() {
    return this.FindAllUserCase.execute();
  }

  findOne(id: string) {
    return this.FindOneUserCase.execute(id);
  }

  update(id: string, updateUserDtdata: UpdateUserDto) {
    return this.UpdateUserCase.execute(id, updateUserDtdata);
  }

  remove(id: string) {
    return this.DeleteUserCase.execute(id); 

  }
}
