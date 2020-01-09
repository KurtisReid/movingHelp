var http = require('http');
var gas = require('./gasCalc.js');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Worl!'); //write a response to the client
  res.write(gas.findGasCost());
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080