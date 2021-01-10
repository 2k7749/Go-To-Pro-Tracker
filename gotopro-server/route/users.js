const users = require('express').Router();
const controller = require('../controller/users');

//MIDDLEWARE 
const auth = require('./../middleware/auth');

users.post('/user/login', controller.userLogin);
users.post('/user/signup', controller.userSignup);
users.get('/user/me', auth, controller.userGetMe);
users.post('/user/addnotitoken', auth, controller.addNotiToken);

module.exports = users;