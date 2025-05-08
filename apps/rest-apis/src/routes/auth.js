import express from 'express';
import passport from 'passport';

const routes = express.Router({ strict: true });

routes.post('/local', passport.authenticate('local'), (request, response) => {
  return response.sendStatus(200);
});

routes.get('/status', (request, response) => {
  return request.user ? response.send(request.user) : response.sendStatus(401);
});

export default routes;
