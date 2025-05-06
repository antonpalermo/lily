import express from 'express';

import users from './users';
import health from './health';

const routes = express.Router({ strict: true });

routes.use('/users', users);
routes.use('/health', health);

export default routes;
