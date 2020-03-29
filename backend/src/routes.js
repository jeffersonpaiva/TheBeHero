const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentsController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// MOSTRAR, CRIAR Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// MOSTRAR, CRIAR Deletar Incidents
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

//Mostrar Casos espeficicos
routes.get('/profile', ProfileController.index);

//Login
routes.post('/sessions', SessionController.create);

    module.exports = routes;