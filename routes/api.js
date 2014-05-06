'use strict';

// ## Module Dependencies
module.exports = function (server, config) {
  server.get('/api/example', function (req, res) {
    res.send({
      config: config
    });
  });

  server.get('/api/example/:id', function (req, res) {
    res.send({
      id: req.params.id,
      query: req.query,
      config: config
    });
  });
};