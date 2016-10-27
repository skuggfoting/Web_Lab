var whiteboardModel = require('../models/whiteboard');

module.exports.getAll = function(req, res) {
  res.json(whiteboardModel.getAll());
};

module.exports.get = function(req, res) {
  var whiteboardItem = whiteboardModel.get(req.params.id);
  if (whiteboardItem) {
    res.json(whiteboardModel.get(req.params.id));
  } else {
    res.status(404);
    res.send();
  }
}

module.exports.remove = function(req, res) {
  whiteboardModel.remove(req.params.id);
  res.status(200);
  res.send();
};

module.exports.update = function(req, res) {
  var updateWhiteboard = req.body;
  var id = req.params.id;
  if (whiteboardModel.get(id)) {
    whiteboardModel.remove(id);
    whiteboardModel.add(id, updateWhiteboard);
    res.status(200);
    res.send();
  } else {
    whiteboardModel.add(id, updateWhiteboard);
    res.status(201);
    res.setHeader('Location', '/whiteboards/' + id);
    res.json({
      id: id
    });
    res.send();
  }
};

module.exports.add = function(req, res) {
  var newWhiteboard = req.body;
  var id = whiteboardModel.add(newWhiteboard);
  res.setHeader('Location', '/whiteboards/' + id);
  res.status(201);
  res.json({
    id: id
  });
};
