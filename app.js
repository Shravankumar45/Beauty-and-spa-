var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser=require('body-parser');
const expressLayouts= require('express-ejs-layouts');

var app = express();

//Setting up the template
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// setup static folder to serve css, javascript and images
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
// Express confi
 
 
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//setting Path
// set environment variable for port
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.render('index');

})
app.get('/contact',(req,res)=>{
  res.render('contact');
})
app.get('/services',(req,res)=>{
  res.render('services');
})
app.listen(port,()=>{
  console.log("Application is running at port 3000");
})



