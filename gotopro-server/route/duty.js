const route = require('express').Router();
const controller = require('../controller/duties');

const auth = require('./../middleware/auth');

route.get('/duties/:id', controller.getDuties);
route.post('/duties', auth, controller.postDuty);
route.delete('/duties/:id', auth, controller.deleteDuty);
route.put('/duties/:id?', auth, controller.toggleDutyDone);

module.exports = route;