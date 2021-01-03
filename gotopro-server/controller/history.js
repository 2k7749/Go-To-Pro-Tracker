const config = require('./../config/config');
//MODEL
const Duties = require("./../models/Duties")
const History = require("./../models/History");

const getHistory = async (req, res) => {
    try{
        const history = await History.find({ dutyId: req.params.dutyid });
    //    console.log(history[0]);

    //    console.log(history[1]);


        // const nextDays = [];
        // history.map( (item) => {
        //     nextDays.push(item.dateString)
        // });

        let markedDay = {};

        history.map( (item) => {
            markedDay[item.dateString] = {
            selected: item.selected,
            marked: true,
            selectedColor: item.selectedColor,
            }
        });

        if(history !== null){
            return res.json(markedDay)
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
        console.log(dateString);
        console.log(newHistory);

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
            "new": true,
            useFindAndModify: false
        });

        await createHistory.save();

        res.status(201).json({
            success: true,
            message: "Cập nhật lịch sử thành công"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Cập nhật lịch sử không thành công"
        });
        console.log(err);
    }
}

module.exports = { addHistory, getHistory };