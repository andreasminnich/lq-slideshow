module.exports = function(app) {
  var express = require('express');
  var serveIndex = require('serve-index');
  var photosRouter = express.Router();

  photosRouter.get('/', function(req, res) {
    serveIndex('public/assets/')(req, res);

    /*res.send({
      'photos': []
    });*/
  });

  photosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  photosRouter.get('/:id', function(req, res) {
    res.send({
      'photos': {
        id: req.params.id
      }
    });
  });

  photosRouter.put('/:id', function(req, res) {
    res.send({
      'photos': {
        id: req.params.id
      }
    });
  });

  photosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/photos', photosRouter);
};
