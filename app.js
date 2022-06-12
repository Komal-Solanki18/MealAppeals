
//const mongoose = require('mongoose');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// const DB="mongodb+srv://Komal:<1234>@meal-appeal.9xutr.mongodb.net/Project?retryWrites=true&w=majority";
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false, 

// }).then(() => {
//     console.log('connection successful');
// }).cath((err) => console.log('no connection'));
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);




app.get("/recipe-submitted", function(req, res){
 
  res.redirect("/");
});
app.get("/about",function(req,res){
  res.sendFile(__dirname+"/public/aboutUs.html");
})

app.listen(port, ()=> console.log(`Listening to port ${port}`));


// const mongoose = require('mongoose');
// const MongoClient = require("mongodb");
// const DB="mongodb+srv://Komal:<1234>@meal-appeal.9xutr.mongodb.net/Project?retryWrites=true&w=majority";
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false, 

// }).then(() => {
//     console.log('connection successful');
// }).cath((err) => console.log('no connection'));

// const url = 'mongodb://localhost:27017/';
  


