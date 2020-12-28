//MODEL
const Duties = require("./../models/Duties");

//Get Duties
const getDuties = async (req, res) => {
    try{
        const fetchDuties = await Duties.find( {} );
        res.status(200).send(fetchDuties);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//POST Duty
const postDuty = async (req, res) => {
    try{
        const {
            dutyName,
            description,
            color,
            type,
            goal,
            hours,
            minutes,
            creationDate,
            status,
            currentStreak,
            maxStreak,
            history
        } = req.body;
        const newDuty = req.body; //body parse

        duty = new Duties({
            dutyName,
            description,
            color,
            type,
            goal,
            hours,
            minutes,
            creationDate,
            status,
            currentStreak,
            maxStreak,
            history
        });
        await duty.save();
        res.status(201).send(newDuty);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//DELETE Duty
const deleteDuty = async (req, res) => {
    try{
        const deleteDutyId = req.params.id;
        await Duties.findByIdAndRemove(deleteDutyId);
        res.status(201).send({ message: "Xoá thành công" });
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

//Toggle Comp
const toggleDutyDone = async (req, res) => {
    try{
        const toggleDutyId = req.params.id;
        const dutyStatus = req.query.isComplete;

        // const matchingDuty = await Duties.findOne({ _id: toggleDutyId })
        // matchingDuty.status = dutyStatus;

        const newUpdateId = { _id: toggleDutyId };
        const newDocUpdate = {
            $set: {
              status: dutyStatus,
            },
          };
        const options = { upsert: true };

        await Duties.update( newUpdateId, newDocUpdate, options );

        res.status(201).send({ message: "Cập nhật trạng thái thành công" });
    }catch(err){
        res.status(500);
        console.log(err);
    }

};

module.exports = { getDuties, postDuty, deleteDuty, toggleDutyDone };

