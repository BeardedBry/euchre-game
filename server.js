var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

server.listen(80);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data){
        console.log(data);
    });

    socket.on('playCard', function (data){
        console.log(data);
    });
});