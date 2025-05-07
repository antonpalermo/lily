import passport from 'passport';
import passportLocal from 'passport-local';
import { User } from '../mongoose/schemas/user';

export default passport.use(
  new passportLocal.Strategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username, password });

      if (!user) {
        throw new Error('user not found');
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  })
);
