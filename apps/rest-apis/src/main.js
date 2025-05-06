import mongoose from 'mongoose';

import { createApp } from './app';
import { logger } from './logger';

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => logger('app:database', 'database connected'))
  .catch(() => logger('app:database', 'unable to connect to database'));

const app = createApp();
const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
