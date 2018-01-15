var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'chittanoorushruhti@gmail.com',
     pass: 'chittanooru558'
   }
});

var mailOptions = {
    from:'chittanoorushruhti@gmail.com',
    to: 'chittanoorushruhti@gmail.com',
    subject : 'Hello from Node',
    text: 'NodeJs wishes you a happy vacation!!:)'
};

transporter.sendMail(mailOptions, function(err, info){
  if(err)
 console.log(err);
else{
    console.log("Email sent "+ info.response);
}


});
