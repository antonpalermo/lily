import express from 'express';
import { User } from '../mongoose/schemas/user';
import { logger } from '../logger';

const routes = express.Router({ strict: true });

routes.post('/create', async (request, response) => {
  try {
    const user = await User.create({ name: 'Sample Name' });
    return response.status(201).json(user);
  } catch (error) {
    logger('app:api', error);
  }
});

export default routes;
