const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const options = (process.env.ORIGIN_HOST ? {
  cors: {
    origin: process.env.ORIGIN_HOST
  }
}: {});
const io = require("socket.io")(server, options);

let guesses = [];

app.use(express.static(path.resolve(__dirname, './react-ui/build')));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('admin-change-round', (data) => {
    console.log(data);
    io.emit('change-round', data);
  })

  socket.on('message', (data) => {
    console.log(data);
  });

  socket.on('player-guess', (data) => {
    guesses.push(data);
    console.log(guesses);
  })
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on *:', port);
});
