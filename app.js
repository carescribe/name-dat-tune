const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);
const io = require("socket.io")();

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
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on *:', port);
});
