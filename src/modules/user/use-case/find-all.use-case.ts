import { Injectable,
  Logger,
  ServiceUnavailableException
} from "@nestjs/common";
import { AllRepository } from "../repository/find-all.repository";

@Injectable()
export class FindAllUseCase {
  constructor(
  private readonly allRepository: AllRepository,
  private readonly Logger: Logger,
 ) {}

  async execute() {
    try {
      const users = await this.allRepository.findAll();
      return users;
    } catch (err) {
        const error= new ServiceUnavailableException('Error on create user', {
            cause: err,
            description: `Error on create all users: ${err.message}` || 'Unknown error occurred',
            });
          this.Logger.error(error.message, error.stack);
          throw error;
    
        }
  }
}
