const route = require('express').Router();
const controller = require('./../controller/duties');

route.get('/tasks', controller.getDuties);
route.post('/tasks', controller.postDuty);
route.delete('/tasks/:id', controller.deleteDuty);
route.put('/tasks/:id?', controller.toggleDutyDone);

module.exports = route;