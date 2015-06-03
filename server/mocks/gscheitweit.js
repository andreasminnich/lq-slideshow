module.exports = function(app) {
  var express = require('express');
  var serveIndex = require('serve-index');
  var gscheitweitRouter = express.Router();

  gscheitweitRouter.get('/', function(req, res) {
    serveIndex('public/assets/')(req, res);

    /*res.send({
      'gscheitweit': []
    });*/
  });

  gscheitweitRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  gscheitweitRouter.get('/:id', function(req, res) {
    res.send({
      'gscheitweit': {
        id: req.params.id
      }
    });
  });

  gscheitweitRouter.put('/:id', function(req, res) {
    res.send({
      'gscheitweit': {
        id: req.params.id
      }
    });
  });

  gscheitweitRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/gscheitweit', gscheitweitRouter);
};
