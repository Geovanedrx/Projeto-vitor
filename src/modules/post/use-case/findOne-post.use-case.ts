import { Injectable,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import { OneRepositoryPost } from "../repository/findOne-post.repository";

@Injectable()
export class findUniquePost {
  constructor(
  private readonly oneRepository: OneRepositoryPost,
  private readonly Logger: Logger,
 ) {}

  async execute(id:string) {
    try {
      const post = await this.oneRepository.findOnePost(id)
      return post;
    } catch (err) {
        const error= new ServiceUnavailableException('Error on list One post', {
            cause: err,
            description: `Error on list unique post: ${err.message}` || 'Unknown error occurred',
            });
          this.Logger.error(error.message, error.stack);
          throw error;
    
        }
      }
}
