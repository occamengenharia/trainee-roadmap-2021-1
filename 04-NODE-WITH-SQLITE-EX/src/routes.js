const { Router } = require('express');

const UsersController = require('./controllers/UsersController');

const routes = Router();

const usersController = new UsersController()

routes.get('/users', usersController.list);
routes.post('/users', usersController.create);

module.exports = routes;