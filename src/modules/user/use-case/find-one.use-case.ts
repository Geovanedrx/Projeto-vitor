import { Injectable,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import { OneRepository } from "../repository/find-one.repository";

@Injectable()
export class findUnique {
  constructor(
  private readonly oneRepository: OneRepository,
  private readonly Logger: Logger,
 ) {}

  async execute(id:string) {
    try {
      const users = await this.oneRepository.findOne(id)
      return users;
    } catch (err) {
        const error= new ServiceUnavailableException('Error on create user', {
            cause: err,
            description: `Error on create unique user: ${err.message}` || 'Unknown error occurred',
            });
          this.Logger.error(error.message, error.stack);
          throw error;
    
        }
      }
}
