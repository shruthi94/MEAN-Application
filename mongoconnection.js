// var connectionString  = 'mongodb://127.0.0.1:27017/mytickets';
// var mongoose = require('mongoose');

// var db = mongoose.createConnection(connectionString);

// db.on('error' , function(err){
//     console.log("DB CONN ERR" +err);

// });

// db.on('open' , function(){
//     console.log("DB CONN opened");

// console.log(db.collection.find('tickets').toArray()); 


// });


// db.on('close' , function(){
//     console.log("DB CONN closed" );

// });




// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user: 'chittanoorushruhti@gmail.com',
//      pass: 'chittanooru558'
//    }
// });

// var mailOptions = {
//     from:'chittanoorushruhti@gmail.com',
//     to: 'chittanoorushruhti@gmail.com',
//     subject : 'Hello from Node',
//     text: 'NodeJs wishes you a happy vacation!!:)'
// };





// transporter.sendMail(mailOptions, function(err, info){
//   if(err)
//  console.log(err);
// else{
//     console.log("Email sent "+ info.response);
// }


// });

var mongojs = require('mongojs');
var db = mongojs('mongodb://root:root123@ds139909.mlab.com:39909/mytasklist', ['tasks']);

db.tickets.find(function(err, tasks){
 if(err) res.send(err);
 console.log(tasks);
});


