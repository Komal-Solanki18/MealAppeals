const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//const MongoClient = require("mongodb");

mongoose.connect('mongodb://localhost:27017/Project',
 { useNewUrlParser: true, useUnifiedTopology: true });
//const DB="mongodb+srv://Komal:<1234>@meal-appeal.9xutr.mongodb.net/Project?retryWrites=true&w=majority";
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false, 

// }).then(() => {
//     console.log('connection successful');
// }).cath((err) => console.log('no connection'));

// const url = 'mongodb://localhost:27017/';


// const dbname = "Project";

// MongoClient.connect(url, (err,client)=>{
//    if(!err) {
//       console.log("successful connection with the server");
//    }
//    else
//       console.log("Error in the connectivity");
// })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');

