import mongoose from 'mongoose';

import { createApp } from './app';

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('database connected'))
  .catch((err) => console.log('mongoose connection error: ', err));

const app = createApp();
const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
