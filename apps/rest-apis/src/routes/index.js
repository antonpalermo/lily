import express from 'express';

import auth from './auth';
import users from './users';
import health from './health';

const routes = express.Router({ strict: true });

routes.use('/auth', auth);
routes.use('/users', users);
routes.use('/health', health);

export default routes;
