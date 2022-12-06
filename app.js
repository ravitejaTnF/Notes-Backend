const express = require('express')
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const PORT = 3000;
const url = 'mongodb+srv://savenotes:savehere123@notes.dckjsam.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
mongoose.connect(
    url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (error,client) => {
        if(error){
            console.log('Error connecting to database');
        }else{
            console.log('Connected to Database');
        }
    }
)
app.use(router);
app.listen(PORT,() => {
    console.log('server is running');
})