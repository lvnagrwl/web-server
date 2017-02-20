var express = require('express');
var app = express();

var PORT = 3000;


var MiddleWare = require('./MiddleWare.js');



app.use(MiddleWare.logger);


app.get('/' ,MiddleWare.requestAuthentication ,  function(req , res){

	res.send('Hello Middleware Server!');

});

app.get('/about' , function(req , res){
 
 res.send('About Middleware');
  
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT , function(){
	console.log('Server has started at port :' +PORT);
});

