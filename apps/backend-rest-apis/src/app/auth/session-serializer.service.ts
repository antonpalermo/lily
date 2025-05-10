import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  serializeUser(user: { id: string }, done: (err, user) => void) {
    console.log('serializeUser: ', user);
    done(null, user.id);
  }

  async deserializeUser(payload: { id: string }, done: (err, user) => void) {
    const user = this.userService.findUserById(payload.id);
    console.log('deserializeUser: ', user);
    done(null, user);
  }
}
