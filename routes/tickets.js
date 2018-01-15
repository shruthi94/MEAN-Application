var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/mytickets',['tickets']);

//Get All Tickets
router.get('/gettickets', function(req, res, next){
 //res.send('TICKETS API ');
 console.log("request received for display tickets" + req.body);


db.tickets.find(function(err, tickets){
 if(err) res.send(err);
 res.json(tickets);
});

});



router.post('/createticket', function(req, res, next){
 //res.send('TICKETS create API ');
 
 //var task = req.body;

  var ticket = {
    "description":req.body.description,
	"customer": req.body.customer,
	"contact": req.body.contact,
	"offering": req.body.offering  
 };
console.log(ticket);

 db.tickets.save(ticket, function(err, ticket){
     if(err) res.send(err);

     res.json(ticket);
 });
});


module.exports = router;
