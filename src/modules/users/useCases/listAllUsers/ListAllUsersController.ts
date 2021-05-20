import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

    handle(request: Request, response: Response): Response {
        try {
            const users = this.listAllUsersUseCase.execute(request.headers as any);
            return response.json(users);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { ListAllUsersController };
