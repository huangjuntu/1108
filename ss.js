//var config = require('./common/configure.js');
var mysql = require('mysql');
//var sql = require('./common/sql.js');
exports.serverPort = 10002;

var bodyParser = require('body-parser');

var ipAddr = "10.200.43.36";
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

var intervalTime = 60000;	//每次监测的间隔时间
var data = {};  //save new data
var led = "True";

//var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




io.on('connection', function(socket){

    socket.on('disconnect', function(){
             console.log('--A user '+ socket.id +' disconnected');
    });
	socket.on('exe', function(data){console.log(data);
             if(data.no==1)
				io.emit('page',{"no":1});
			if(data.no==2)
				io.emit('page',{"no":2});
			if(data.no==3)
				io.emit('page',{"no":3});
			if(data.no==4)
				io.emit('page',{"no":4});
			if(data.no==5)
				io.emit('page',{"no":5});
			if(data.no==6)
				io.emit('page',{"no":6});
			if(data.no==7)
				io.emit('page',{"no":7});
			if(data.no==8)
				io.emit('page',{"no":8});
			if(data.no==9)
				io.emit('page',{"no":9});
			if(data.no==10)
				io.emit('page',{"no":10});
			if(data.no==11)
				io.emit('page',{"no":11});
			if(data.no==12)
				io.emit('page',{"no":12});
			if(data.no==13)
				io.emit('page',{"no":13});
			if(data.no==14)
				io.emit('page',{"no":14});
			if(data.no==15)
				io.emit('page',{"no":15});
			if(data.no==16)
				io.emit('page',{"no":16});
			if(data.no==17)
				io.emit('page',{"no":17});
			if(data.no==18)
				io.emit('page',{"no":18});
			if(data.no==19)
				io.emit('page',{"no":19});
			if(data.no>20)
				io.emit('page',{"no":21});
    });

});


http.listen(10002, function(){
	console.log("http://127.0.0.1:10002");
	 // var timer = setInterval(function(){
	//		io.emit('LEV',{"lev":Math.floor(Math.random()*3)});
	 //  },5000);

});

