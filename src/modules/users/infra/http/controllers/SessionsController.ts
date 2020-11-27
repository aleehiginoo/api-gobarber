import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

interface IUser {
  name: string;
  email: string;
  password?: string;
}
export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const {
      user,
      token,
    }: { user: IUser; token: string } = await authenticateUserService.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}
