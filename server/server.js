// Get dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var logger = require("morgan");
var cors = require("cors");

// Get our API routes
const api = require('./routes/api');
const ticket = require('./routes/ticket');

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// Parsers for POST data
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Set our api routes
app.use('/api', api);
app.use('/ticket', ticket);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const appServer = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
appServer.listen(port, () => console.log(`API running on localhost:${port}`));