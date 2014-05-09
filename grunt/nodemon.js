'use strict';

module.exports = {
  dev: {
    script: 'server.js',
    options: {
      nodeArgs: ['--debug'],
      env: {
        PORT: '3000'
      }
    }
  }
};