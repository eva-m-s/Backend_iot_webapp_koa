const koa = require('koa');
const serve = require('koa-static');
const http = require('http');
//const socketIo  = require('socket.io');
const { Server } = require('socket.io');
const cors = require('cors'); 
const data = require('./datafunctions');

const config = require(__dirname+"/config.js");
const PORT = config.koa.port || process.env.PORT; 
const app = new koa();
app.use(cors());
const server = http.createServer(app.callback());
const io = new Server(server ,{
    cors:{
      origin: "http://192.168.178.27:3000",
      //origin: "http://localhost:3000",
      methods: ["GET","POST"],
    },
});
data.setup(io);

// Static content

// Run when client connects
/*io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});*/


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
