var countdown = 1000;  
setInterval(function() {  
  countdown--;
  io.sockets.emit('timer', { countdown: countdown });
}, 1000);

io.sockets.on('connection', function (socket) {  
  socket.on('reset', function (data) {
    countdown = 1000;
    io.sockets.emit('timer', { countdown: countdown });
  });
});