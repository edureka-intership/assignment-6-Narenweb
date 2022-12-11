const express = require('express');
const mongoose = require('mongoose');
const RestaurentRoutes = require('./routes/Restaurant');
const bodyParser = require('body-parser')


// constant
const mongoDBLink = 'mongodb://127.0.0.1:27017/zomato';
const PORT = 3000;

//Connect to mongoDB
mongoose.connect(mongoDBLink,()=>{
    console.log('Connected MongoDB');
},e=>console.log(e))

//Server Config
const app = express();

app.use(bodyParser.json())
app.use('/', RestaurentRoutes)

//Listner
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})