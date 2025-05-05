import express from 'express';

const route = express.Router({ strict: true });

route.get('/', (_, response) => {
  return response.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
  });
});

export default route;
