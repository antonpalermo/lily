import passport from 'passport';
import passportLocal from 'passport-local';
import { User } from '../mongoose/schemas/user';

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = (await User.findById(id)).toObject();

    if (!user) throw new Error(`user: ${id} not found`);

    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new passportLocal.Strategy(async (username, password, done) => {
    try {
      const { id } = await User.findOne({ username, password });

      if (!id) {
        throw new Error('user not found');
      }

      done(null, id);
    } catch (error) {
      done(error, null);
    }
  })
);
