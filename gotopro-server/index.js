const express = require('express');
const duty = require('./route/duty');
const users = require('./route/users')
const cors = require('cors');
const db = require("./models");

const app = express();

//IP CONFIG
const IPCONFIG = process.env.IP || '192.168.1.7';
const PORT = process.env.PORT || 8000;


app.use(cors()); // CROSS-Origin Resource Sharing Enable
app.use(express.json()); // JSON type

app.use(duty);
app.use(users);

// app.get('/', function (req, res) {
//     res.send('Hello World');
//  });

(async () => {
    try{
        await db.sequelize.sync();
        app.listen(PORT, IPCONFIG, () => {console.log(`Server listening: 🏳️‍🌈 🏳️‍🌈 🏳️‍🌈 http://${IPCONFIG}:${PORT} 🏃‍♂️ 🏃‍♂️ 🏃‍♂️`)});
    }catch(err){
        // Catch Err
        console.log("An error occurred with 🎅 DATABASE 🎅 => Error: ", err);
    }
})(); //<= RUN
