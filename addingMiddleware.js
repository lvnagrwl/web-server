var express = require('express');
var app = express();

var PORT = 3000;

//adding MiddleWare
//logger : to log the request made by visitor 
//req.method : prints onlu GET on console
//req.originalUrl: to print the details 


var MiddleWare = {
	requestAuthentication: function(req , res , next){
		console.log('Server route hit!');
		next();
	},
    logger: function(req , res , next){
    	console.log('Request: ' + new Date().toString() + +req.method + ' ' +req.originalUrl);
    	next();
    }
};

// It will produce output on every page in console . if we want on selected on then we need to embedd in respect get function.
//app.use(MiddleWare.requestAuthentication); 

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

