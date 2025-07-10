import {
    Injectable,
    Logger,
    ServiceUnavailableException,
} from '@nestjs/common';
import { CreatePostRepository } from '../repository';
import { CreatePostDto } from '../dto/create-post.dto';


@Injectable()
export class CreatePostUseCase {
    constructor (
        private readonly createPostRepository: CreatePostRepository,
        private readonly logger: Logger = new Logger(),
    ) { }

    async execute(data: CreatePostDto) {
        try {
            const post = await this.createPostRepository.create(data);
            this.logger.log(`User created successfully:`, CreatePostUseCase.name);
            return post;

        }

        catch (err) {
            const error = new ServiceUnavailableException('Error on create post', {
                cause: err,
                description: `Error on create post: ${err.message}` || 'Unknown error occurred',
            });
            this.logger.error(error.message, error.stack);
            throw error;

        }

    }
}