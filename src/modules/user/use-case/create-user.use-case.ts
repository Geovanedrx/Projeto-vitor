import {
Injectable,
Logger,
ServiceUnavailableException,
} from '@nestjs/common'; 
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserRepository } from '../repository/create-user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly logger: Logger = new Logger(),
  ) {}

  async execute(data: CreateUserDto) {
    try {
      const user = await this.createUserRepository.create(data);
      this.logger.log(`User created successfully:`, CreateUserUseCase.name);
      return user;

    } catch (err) {
    const error= new ServiceUnavailableException('Error on create user', {
        cause: err,
        description: `Error on create user: ${err.message}` || 'Unknown error occurred',
        });
      this.logger.error(error.message, error.stack);
      throw error;

    }
    
    }
}