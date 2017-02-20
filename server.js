var xyz = require('express');
var app = xyz();

var PORT =3000; //uppercase measn do not change this value

app.get('/' , function(req , res){

	res.send('Hello express!');
});

app.get('/about' , function(req , res){

	res.send('About Us!');
});

//console.log(__dirname);  to print the current path of file in command line

app.use(xyz.static(__dirname + '/public'))  // to import the folder

app.listen(PORT , function(){
	console.log('Express server started');
	console.log('Server started at port:' +PORT);
});