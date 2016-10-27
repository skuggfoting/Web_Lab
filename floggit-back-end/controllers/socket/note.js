var noteModel = require('../models/note');

module.exports = function(socket){
  function onChange(items){
    socket.emit('note-update', items);
  }

  onChange(noteModel.getAll());

  noteModel.on('updated', onChange);

  socket.on('disconnect', function() {
      noteModel.removeListener('updated', onChange);
   });
};
