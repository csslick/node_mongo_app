var nodemailer = require('nodemailer');
var express= require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

// db 연결
var database;


app.listen(3000, function(){
	console.log('Server Run at 3000 port!');
});

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.redirect('./login.html')
});

app.post('/login', function(req, res){
	var url = 'mongodb://localhost:27017/mydb';

	mongodb.connect(url, function(err, db){
		if(err) res.send('error');

		res.send('DB 연결 성공!');
		databas = db;
	});
});

