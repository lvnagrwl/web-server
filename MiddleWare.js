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


module.exports = MiddleWare; 
