var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const express = require('express')

var connectCounter = 0;

//app.use(express.static('public'))
//

http.on('listening', () => {
 console.log('Listening on port 3000')
})

app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){  
    connectCounter = socket.client.conn.server.clientsCount;
    io.emit('connectCounter', connectCounter);
    console.log('a user connected, now' + connectCounter);
});



http.listen(process.env.PORT || 3000)


/*
const http = require('http')

const app = express();

app.use(express.static('public'))
app.set('port', process.env.PORT || 3000)


const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 3000')
})


const io = require('socket.io').listen(server)

io.sockets.on('connection', (socket) => {
 console.log('Client connected: ' + socket.id)
 socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))
 socket.on('disconnect', () => console.log('Client has disconnected'))
})


io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
});

server.listen(process.env.PORT || 3000) // .listen('3000')
*/