const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
  name: 'Euclides',
  email: 'euclidesdry@gmail.com',
  password_hash: 'u3028150910935j312',
});

// Definição das Rotas

module.exports = routes;