const http = require('http');
const server = require('./server');


http.createServer(server).listen(server.get('port'), function () {
    console.log('eShopping is running on port:' + server.get('port'));    
});
