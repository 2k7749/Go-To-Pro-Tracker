const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

//DB CONNECT HERE
const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

//ROUTE
const duty = require('./route/duty');
const users = require('./route/users');
const history = require('./route/history');

//IP CONFIG
const IPCONFIG = process.env.IP || '192.168.1.6';
const PORT = process.env.PORT || 8000;


var corsOptions = {
    origin: `http://${IPCONFIG}:${PORT}`
};

const app = express();

app.use(cors(corsOptions)); // CROSS-Origin Resource Sharing Enable
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // JSON type

app.use(duty);
app.use(history);
app.use(users);


app.get("/", (req, res) => {
    res.json({ message: "API Working" });
  });

(async () => {
    try{
        app.listen(PORT, IPCONFIG, () => {console.log(`Server listening: 🏳️‍🌈 🏳️‍🌈 🏳️‍🌈 http://${IPCONFIG}:${PORT} 🏃‍♂️ 🏃‍♂️ 🏃‍♂️`)});
    }catch(err){
        // Catch Err
        console.log("An error occurred with 🎅 DATABASE 🎅 => Error: ", err);
    }
})(); //<= RUN
