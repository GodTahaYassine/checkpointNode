var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'testEmail@outlook.com',
    pass: 'Hello555'
  }
});

var mailOptions = {
  from: 'testEmail@outlook.com',
  to: 'targetEmail',
  subject: 'test',
  text: 'email test'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});