const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyPaser.json());
const url = process.env.MONGODB_URL;


//connect to the database
mongoose.connect(url);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("DB Connected");
});

const sudentRouter = require("./routes/student_routes.js");
app.use("/student",sudentRouter)

//run server
app.listen(port,()=>{
    console.log(`server run on: ${port}`)
});
