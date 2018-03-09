import config from './config';
import express from 'express';
import http from 'http';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import socketIO from 'socket.io';
import axios from 'axios';
import cors from 'cors';
import moment from 'moment';



const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(cors());


app.use(sassMiddleware(
  {src: path.join(__dirname, 'sass'), 
    dest: path.join(__dirname, 'public')
  }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/api', apiRouter);

import serverRender from './serverRender';

app.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {initialMarkup, initialData});
    })
    .catch(console.log);
});


io.on('connection', socket => {
  console.log('User connected');

  EmitTime(socket);
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

const EmitTime = async socket => {
  try {
    var deadLine = moment([2018, 3, 19, 0, 0, 0, 0]).valueOf();
    var now = moment().unix() * 1000;
    var milisec_diff;
    if (deadLine < now) {
      milisec_diff = now - deadLine;
    }else{
      milisec_diff = deadLine - now;
    }
    var date_diff = new Date( milisec_diff );
    const diff = {
      days: Math.floor(milisec_diff / 1000 / 60 / (60 * 24)),
      hours: date_diff.getHours(),
      min: date_diff.getMinutes(),
      sec: date_diff.getSeconds()
    };
    socket.emit('PreOrderDeadLine', diff);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};



server.listen(config.port, config.host, ()=>{
  console.info('Express listening on port: ' + config.port + ' ' + config.host);
});

