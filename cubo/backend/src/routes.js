const express = require('express');
const Controller = require('./controllers/Controller');

const routes = express.Router();

routes.post('/users', Controller.store);
routes.get('/users', Controller.show);
routes.delete('/users/:id', Controller.destroy);

module.exports = routes;