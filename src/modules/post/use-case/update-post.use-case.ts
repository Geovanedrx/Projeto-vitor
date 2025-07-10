import {Injectable,
    Logger,
    ServiceUnavailableException
} from '@nestjs/common';

import { UpdatePostDto } from '../dto/update-post.dto';
import { UpdateRepositoryPost } from '../repository/update-post.repository';

@Injectable()
export class FindUpdatePost {
    constructor(
        private readonly UpdateRepositoryPost: UpdateRepositoryPost,
        private readonly Logger: Logger,

    ) {}

    async execute(id:string, data: UpdatePostDto) {
        try {
const post = await this.UpdateRepositoryPost.findUpdate(id, data)
            return post;

        }
 catch (err) {
         const error= new ServiceUnavailableException('Error on update post', {
             cause: err,
             description: `Error on update post: ${err.message}` || 'Unknown error occurred',
             });
           this.Logger.error(error.message, error.stack);
           throw error;
     
         }

    }




}