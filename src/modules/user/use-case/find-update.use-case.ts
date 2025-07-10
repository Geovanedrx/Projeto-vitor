import {
    Injectable,
    Logger,
    ServiceUnavailableException
} from "@nestjs/common";
import { UpdateRepository } from "../repository/update.repository"
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class FindUpdate {
    constructor(
        private readonly updateRepository: UpdateRepository,
        private readonly Logger: Logger,
    ) { }


    async execute(id: string, data: UpdateUserDto) {
        try {
            const users = await this.updateRepository.findUpdate(id, data)
            return users;
        }
     catch (err) {
         const error= new ServiceUnavailableException('Error on update user', {
             cause: err,
             description: `Error on update user: ${err.message}` || 'Unknown error occurred',
             });
           this.Logger.error(error.message, error.stack);
           throw error;
     
         }
}
}
