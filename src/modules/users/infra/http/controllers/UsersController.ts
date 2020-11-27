import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUsersServise from '@modules/users/services/CreateUsersService';

interface IUser {
  name: string;
  email: string;
  password?: string;
}

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    // const usersRepository = new UsersRepository();
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUsersServise);

    const user: IUser = await createUser.execute({
      name,
      password,
      email,
    });

    delete user.password;

    return response.json(user);
  }
}
