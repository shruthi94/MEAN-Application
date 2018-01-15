var express = require('express');
var path  = require('path');
var tickets = require('./routes/tickets');
var index = require('./routes/index');
var port = '3000';
var app= express();
var bodyParser = require('body-parser');
var cors = require('cors');


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'my-app')))


app.use(cors());
//app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





app.use('/',index);
app.use('/api',tickets);
app.listen(port, function(){
    console.log("Server started on 3000");
});