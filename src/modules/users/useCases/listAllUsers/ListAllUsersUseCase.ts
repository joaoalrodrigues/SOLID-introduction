import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    execute({ user_id }: IRequest): User[] {
        const isAdmin = this.usersRepository.findById(user_id).admin;

        if (isAdmin) {
            return this.usersRepository.list();
        }

        throw new Error("User does not have permission.");
    }
}

export { ListAllUsersUseCase };
