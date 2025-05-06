import express from 'express';
import { User } from '../mongoose/schemas/user';

const routes = express.Router({ strict: true });

routes.post('/create', async (request, response) => {
  try {
    const user = await User.create({ name: 'Sample Name' });
    console.log(user);
    return response.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

export default routes;
