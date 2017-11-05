// 로그인 요청 처리 구현

var nodemailer = require('nodemailer');
var express= require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');


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
	// 폼에서 요청한 파라메터 값
	var id = req.body.id,
		pwd = req.body.pwd;

	// db url
	var url = 'mongodb://localhost:27017/mydb';

	// db 연결
	mongodb.connect(url, function(err, db){
		if(err) res.send('error');
		
		// users 컬랙션
		var users = db.collection('users');

		// search id & pwd | document.toArray - 도큐먼트(데이터)를 배열 객체로 반환
		users.find({id:id, pwd: pwd}).toArray(function(err, docs){
			if(err){ console.log('검색 에러')}
			console.log(docs);

			if(docs.length > 0){
				console.log('일치하는 사용자 찾음');
				res.render('index', {title: 'Welcome!! ' + id});
			} else{
				console.log('해당 사용자 없음');
				res.send(`로그인 에러: 해당 사용자 없음<br>
					<a href="/">login 페이지로 이동</a>`);
			}
		});
			
	});
});	// end post(/login)



