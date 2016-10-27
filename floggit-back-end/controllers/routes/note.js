var noteModel = require('../models/note');

module.exports.getAll = function(req, res) {
  res.json(noteModel.getAll());
};

module.exports.get = function(req, res) {
  var noteItem = noteModel.get(req.params.id);
  if (noteItem) {
    res.json(noteModel.get(req.params.id));
  } else {
    res.status(404);
    res.send();
  }
}

module.exports.remove = function(req, res) {
  noteModel.remove(req.params.id);
  res.status(200);
  res.send();
};

module.exports.update = function(req, res) {
  var updateNote = req.body;
  var id = req.params.id;
  if (noteModel.get(id)) {
    noteModel.remove(id);
    noteModel.add(id, updateNote);
    res.status(200);
    res.send();
  } else {
    noteModel.add(id, updateNote);
    res.status(201);
    res.setHeader('Location', '/notes/' + id);
    res.json({
      id: id
    });
    res.send();
  }
};

module.exports.add = function(req, res) {
  var newNote = req.body;
  var id = noteModel.add(newNote);
  res.setHeader('Location', '/notes/' + id);
  res.status(201);
  res.json({
    id: id
  });
};
