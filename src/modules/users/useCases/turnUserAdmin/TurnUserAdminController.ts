import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

    handle(request: Request, response: Response): Response {
        try {
            const user = this.turnUserAdminUseCase.execute(request.params as any);
            return response.json(user);
        } catch (err) {
            return response.status(404).json({ error: err.message });
        }
    }
}

export { TurnUserAdminController };
