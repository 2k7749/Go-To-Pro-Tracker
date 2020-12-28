const config = require('./../config/config');
//MODEL
const Duties = require("./../models/Duties")
const History = require("./../models/History");

const getHistory = async (req, res) => {
    try{
        const history = await History.find({ dutyId: '5fe88de969d67b3dacd3782f' })
        if(history !== null){
            return res.json(history)
        }
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

const addHistory = async ( req, res ) => {
    try{
        const {
            dutyId,
            dateString,
            timestamps,
            selected,
            selectedColor
        } = req.body;
        const newHistory = req.body; //body parse

        const timeToString = new Date(dateString).toISOString().split("T")[0];

        createHistory = new History({
            dutyId,
            dateString : timeToString,
            timestamps,
            selected,
            selectedColor
        });
    
        
        const dutyIdUpdate = { _id: dutyId };
        const dataPush = { $push: { history: createHistory  } }
        
        await Duties.findOneAndUpdate(dutyIdUpdate, dataPush, {
            "upsert": true,
            "new": true
        }
              );

        await createHistory.save();

        res.status(201).send(timeToString);
    }catch(err){
        res.status(500);
        console.log(err);
    }
}

module.exports = { addHistory, getHistory };