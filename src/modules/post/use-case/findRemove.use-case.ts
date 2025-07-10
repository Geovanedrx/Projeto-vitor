import {
    Injectable,
    Logger,
    ServiceUnavailableException
} from "@nestjs/common";
import { RemoveRepositoryPost } from "../repository/FindRemove-post.repository"

@Injectable()
export class FindDeletePost {
    constructor(
        private readonly RemoveRepository: RemoveRepositoryPost,
        private readonly Logger: Logger,

    ) { }

    async execute(id: string) {
        try {
            const post = await this.RemoveRepository.FindRemovePost(id)
            return post;
        }

        catch (err) {
            const error = new ServiceUnavailableException('Error on remove post', {
                cause: err,
                description: `Error on remove post: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;

        }

    }

}
