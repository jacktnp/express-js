const http = require('http');
const server = http.createServer(function(req, res){
    var obj = { name : 'Thanapon', age : 21, city : 'Bangkok'}
    if(req.url === '/'){
        res.write("You're at Homepage.")
        res.end();
    }
    else if(req.url === '/about'){
        res.write(JSON.stringify(obj))
        res.end();
    }
});

server.addListener('connection', function(socket){
    console.log('Client connect')
});

server.listen(3000);
console.log('Listening form port 3000')