import {
    Injectable,
    Logger,
    ServiceUnavailableException
} from "@nestjs/common";
import { RemoveRepository } from "../repository/findremove.repository"

@Injectable()
export class FindDelete {
    constructor(
        private readonly RemoveRepository: RemoveRepository,
        private readonly Logger: Logger,

    ) { }

    async execute(id: string) {
        try {
            const users = await this.RemoveRepository.FindRemove(id)
            return users;
        }

        catch (err) {
            const error = new ServiceUnavailableException('Error on remove user', {
                cause: err,
                description: `Error on remove user: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;

        }

    }

}
