const routes = require('express').Router();
const { User } = require('./app/models');

User.create({name: 'Fransérgio', email: 'fransergio@gmail.com', password_hash: 'asdfraqwer1235sxfds'});

module.exports = routes;