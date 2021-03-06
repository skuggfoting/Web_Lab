var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cors = require('./middleware/cors');
var noteCtr = require('./controllers/routes/note');
var noteSocket = require('./controllers/socket/note');
var whiteboardCtr = require('./controllers/routes/whiteboard');
var whiteboardSocket = require('./controllers/socket/whiteboard');

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors);

/* Routing */
app.get('/v1/notes', noteCtr.getAll);
app.get('/v1/notes/:id', noteCtr.get);
app.delete('/v1/notes/:id', noteCtr.remove);
app.put('/v1/notes/:id', noteCtr.update);
app.post('/v1/notes', noteCtr.add);

app.get('/v1/whiteboards', whiteboardCtr.getAll);
app.get('/v1/whiteboards/:id', whiteboardCtr.get);
app.delete('/v1/whiteboards/:id', whiteboardCtr.remove);
app.put('/v1/whiteboards/:id', whiteboardCtr.update);
app.post('/v1/whiteboards', whiteboardCtr.add);

/* Socket */
io.on('connection', noteSocket);
io.on('connection', whiteboardSocket);

http.listen(8081, function(){
  console.log('listening on *:8081');
});
