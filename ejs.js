var nodemailer = require('nodemailer');
var express= require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.listen(3000, function(){
	console.log('Server Run at 3000 port!');
});

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// ------------------------------------------------
app.get('/', function(req, res){
	res.render('index.ejs', { title: 'Simple Server App'});
});

app.post('/', function(req, res){
  if(req.body){
    var first = req.body.first;
    var second = req.body.second;
    // res.send(first + ',' + second);
    console.log(first, ', ' ,second);
    res.render('index.ejs', {
      title: '계산 결과', 
      first: first, 
      second: second
    });    
  }

});


// var transporter = nodemailer.createTransport({
//   service: 'naver',
//   auth: {
//     user: 'digitone@naver.com',
//     pass: 'naverk6121861'
//   }
// });

// var mailOptions = {
//   from: 'digitone@naver.com',
//   to: 'tailofmoon@naver.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });