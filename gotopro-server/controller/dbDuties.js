let duties = require('../mockdb/duties');

//Get Duties
const getDuties = (req, res) => {
    try{
        res.status(200);
        res.send(duties);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//POST Duty
const postDuty = (req, res) => {
    try{
        const newDuty = req.body; //body parse
        duties.push(newDuty);
        res.status(201);
        res.send(newDuty);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//DELETE Duty
const deleteDuty = (req, res) => {
    try{
        const deleteDutyId = req.params.id;
        duties = duties.filter((duty) => duty.dutyId !== deleteDutyId);
        res.status(201);
        res.send(deleteDutyId);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//Toggle Comp
const toggleDutyDone = (req, res) => {
    try{
        const toggleDutyId = req.params.id;
        const dutyStatus = req.query.isComplete;
        const matchingDuty = duties.find((duty) => duty.dutyId === toggleDutyId);
        matchingDuty.status = dutyStatus;
        res.status(201);
        res.send(duties);
    }catch(err){
        res.status(500);
        console.log(err);
    }

};

module.exports = { getDuties, postDuty, deleteDuty, toggleDutyDone };

