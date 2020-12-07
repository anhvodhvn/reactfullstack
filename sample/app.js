const http = require('http');
const server = require('./server');

http.createServer(server).listen(server.get('port'), function () {
    console.log('eShop is running on port:' + server.get('port'));    
});
