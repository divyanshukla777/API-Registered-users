const express=require('express');
const bodyParser= require('body-parser');
var path = require('path');
var app=express();
var indexRouter = require('./routes/index');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',indexRouter);


port = process.env.PORT || 3000;
app.listen(port)
{
    console.log('users data api running on server:'+port);
}