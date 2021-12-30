const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
  name: 'Euclides',
  email: 'euclidesdry@gmail.com',
  password_hash: '823MA93029038MDA0D',
});

// Definição das Rotas

module.exports = routes;