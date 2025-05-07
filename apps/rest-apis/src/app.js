import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

import passport from 'passport';

import * as path from 'path';

import routes from './routes';
import './strategies/local-strategy';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(
    expressSession({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // store session cookie for 24 hours,
      },
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);

  return app;
}
