import express from 'express';

import health from './health';

const routes = express.Router({ strict: true });

routes.use('/health', health);

export default routes;
