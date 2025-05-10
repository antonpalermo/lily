import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../mongoose/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(): Promise<User> {
    return this.userModel.create({ name: 'Anton Palermo' });
  }

  async findUserById(id: string) {
    return await this.userModel.findById(id);
  }

  async validateUserCredentials(username: string, password: string) {
    try {
      const user = await this.userModel.find({ username, password });

      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      this.logger.error('unable to find user', error);
    }
  }
}
