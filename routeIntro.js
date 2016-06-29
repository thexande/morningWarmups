//Lets require/import the HTTP module
var http = require('http');

const PORT=8080; 

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    switch(request.method) {
    	case 'GET': 
    		console.log('get');
    		break;
    	case 'POST': 
    		console.log('post');
    		break;
    }

}


var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});