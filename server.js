'use strict';

// Module dependencies
var restify = require('restify');

var Config = require('./config/index.js');
var log = require('./utils/logger');
var routes = require('./routes');

var config = new Config();
var server = restify.createServer({
  name: 'restify-seed',
  version: '0.0.1'
});

// Initializes the server once configuration loads
config.load().then(function () {

  log.info('Configurations loaded... initializing the server');

  // Retrieve the configuration object
  var cfg = config.get();

  // ## Middleware
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  // ## Initialize Routes
  routes.api(server, cfg);

  // Forward remaining requests to index
  server.get(/.*/, restify.serveStatic({
    directory: cfg.dirs.static,
    default: 'index.html'
  }));

  server.listen(cfg.server.port, function () {
    log.info('Restify server listening on port ' + cfg.server.port);
  });
});

module.exports = server;