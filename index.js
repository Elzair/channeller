var channeller = {
    messageHandlers: {
      error: function(msg) {
        console.error(msg);
      }
    }
  , on: function(msg, handler) {
      this.messageHandlers[msg] = msg !== 'error' ? handler : this.messageHandlers.error;
    }
  , handle: function(msg) {
      if (this.handlers.hasOwnProperty(msg)) {
        this.handlers[msg]();
      }
      else {
        this.handlers.error();
      }
    }
};

exports.createChanneller = function(obj) {
  obj = obj || {};
  return Object.create(channeller, obj);
};
