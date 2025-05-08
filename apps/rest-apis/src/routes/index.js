import debug from 'debug';
import express from 'express';

import auth from './auth';
import users from './users';
import health from './health';

const routes = express.Router({ strict: true });
const logger = debug('app:api');

routes.use((request, _, next) => {
  logger(`${request.method} - ${request.path}`);
  next();
});

routes.use('/auth', auth);
routes.use('/users', users);
routes.use('/health', health);

export default routes;
