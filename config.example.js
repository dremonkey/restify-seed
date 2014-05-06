'use strict';

// ## Configurations
// Setup your installations for various environments

// Module dependencies
var path = require('path');

var config = {};

// ## Development Environment Configurations
config.development = {
  db: {},
  dirs: {
    static: path.resolve(__dirname, './public')
  },
  server: {
    // Host to be passed to node's `net.Server#listen()`
    host: '127.0.0.1',

    // Port to be passed to node's `net.Server#listen()`
    port: process.env.PORT || 3000
  }
};


// ## Production Environment Configurations
config.production = {
  db: {},
  dirs: {
    static: path.resolve(__dirname, './public')
  },
  server: {
    // Host to be passed to node's `net.Server#listen()`
    host: '127.0.0.1',

    // Port to be passed to node's `net.Server#listen()`
    port: process.env.PORT || 3000
  }
};

module.exports = config;