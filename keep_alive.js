var http = require('http');

http.createServer(function (req, res) {
  res.write("RoCitizensBots have been activated.");
  res.end();
}).listen(8080);