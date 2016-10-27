var whiteboardModel = require('../models/whiteboard');

module.exports = function(socket){
  function onChange(items){
    socket.emit('whiteboard-update', items);
  }

  onChange(whiteboardModel.getAll());

  whiteboardModel.on('updated', onChange);

  socket.on('disconnect', function() {
      whiteboardModel.removeListener('updated', onChange);
   });
};
