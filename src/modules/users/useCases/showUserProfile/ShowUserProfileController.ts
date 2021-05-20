import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

    handle(request: Request, response: Response): Response {
        try {
            const user = this.showUserProfileUseCase.execute(request.params as any);
            return response.json(user);
        } catch (err) {
            response.status(404).json({ error: err });
        }
    }
}

export { ShowUserProfileController };
