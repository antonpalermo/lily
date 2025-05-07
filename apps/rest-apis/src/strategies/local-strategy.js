import passport from 'passport';
import passportLocal from 'passport-local';
import { User } from '../mongoose/schemas/user';

passport.serializeUser((user, done) => {
  console.log('serialize user: ', user);
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  console.log('deserialize user: ', id);
  try {
    const user = await User.findById(id);
    if (!user) throw new Error(`user: ${id} not found`);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

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
