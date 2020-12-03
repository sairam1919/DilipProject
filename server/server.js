// Get dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var logger = require("morgan");
var cors = require("cors");

// Get our API routes
const api = require('./routes/api');

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// Parsers for POST data
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Set our api routes
app.use('/api', api);

const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const connections = new Set()

// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});

wsServer.on('request', function(request) {
  connections.add(request.accept(null, request.origin));
});

exports.Server = function() {
  return { wsServer, connections};
}

wsServer.on('message', function(message) {
  connections.forEach((conn) => conn.send(message))
})

// Once the client disconnects, the `close` handler is called
wsServer.on('close', () => {
  connections.delete(wsServer)
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const appServer = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
appServer.listen(port, () => console.log(`API running on localhost:${port}`));