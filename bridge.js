var inport, sock;

const server = require('http').createServer();
const io = require('socket.io')(server);
const osc = require('osc-min');
const udp = require("dgram");

// Socket.io

io.on('connection', socket => {
  console.log('Front-end is connected!');
  io.emit('osc-test', 'Ready to receive OSC!');
});

io.listen(3000);


// OSC
if (process.argv[2] != null) {
  inport = parseInt(process.argv[2]);
} else {
  inport = 5000;
}

console.log("OSC listener running at http://localhost:" + inport);

sock = udp.createSocket("udp4", function(msg, rinfo) {
  var error;
  try {
    return io.emit('osc', osc.fromBuffer(msg));
    // return console.log(osc.fromBuffer(msg));
  } catch (_error) {
    error = _error;
    return console.log("invalid OSC packet");
  }
});

sock.bind(inport);
