const route = require('express').Router();
const controller = require('../controller/duties');

route.get('/duties', controller.getDuties);
route.post('/duties', controller.postDuty);
route.delete('/duties/:id', controller.deleteDuty);
route.put('/duties/:id?', controller.toggleDutyDone);

module.exports = route;