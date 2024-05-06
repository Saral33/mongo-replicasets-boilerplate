import User from '../model/userSchema';
import { Utils } from '../utils/utils';
import { Request, Response } from 'express';

const registerDummyUser = async (req: Request, res: Response) => {
  try {
    const name = Utils.generateRandomName();
    const email = `${Utils.generateRandomName().replace(' ', '')}@example.com`;
    const password = Utils.generateRandomName();
    await User.create({ name, email, password });
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};
export { registerDummyUser, getAllUsers };
