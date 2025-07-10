import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostUseCase } from './use-case';
import { FindAllPostUseCase } from './use-case/findAll-post.use-case';
import { FindDeletePost } from './use-case/findRemove.use-case';
import { findUniquePost } from './use-case/findOne-post.use-case';
import { FindUpdatePost } from './use-case/update-post.use-case';

@Injectable()
export class PostService {

  constructor(private readonly createPostUseCase: CreatePostUseCase,
    private readonly FindAllPostUserCase: FindAllPostUseCase,
    private readonly FindOnePostUserCase: findUniquePost,
    private readonly UpdatePostUserCase: FindUpdatePost,
    private readonly DeletePostUserCase: FindDeletePost) { }





  async create(data: CreatePostDto) {
    return this.createPostUseCase.execute(data);
  }

  async findAll() {
    return this.FindAllPostUserCase.execute();
  }

  async findOne(id: string) {
    return this.FindOnePostUserCase.execute(id);
  }

 async update(id: string, updatePostDto: UpdatePostDto) {
    return this.UpdatePostUserCase.execute(id, updatePostDto);
  }

  async remove(id: string) {
    return this.DeletePostUserCase.execute(id);
  }
}
