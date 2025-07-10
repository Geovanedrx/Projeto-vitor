import { Injectable,
  Logger,
  ServiceUnavailableException
} from "@nestjs/common";
import { AllRepositoryPost} from "../repository/findAll-post.repository";

@Injectable()
export class FindAllPostUseCase {
  constructor(
  private readonly allRepository: AllRepositoryPost,
  private readonly Logger: Logger,
 ) {}

  async execute() {
    try {
      const post = await this.allRepository.findAllPost();
      return post;
    } catch (err) {
        const error= new ServiceUnavailableException('Error on list all post', {
            cause: err,
            description: `Error on list all post: ${err.message}` || 'Unknown error occurred',
            });
          this.Logger.error(error.message, error.stack);
          throw error;
    
        }
  }
}
