const route = require('express').Router();
const controller = require('../controller/history');

route.post('/history/add', controller.addHistory);
route.get('/history/detail', controller.getHistory);

module.exports = route;