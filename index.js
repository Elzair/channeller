var protolib = require('protolib');

var channeller = {
    events: {
      error: function(msg) {
        throw new Error(msg);
      }
    }
  , on: function(event, handler) {
      this.events[event] = handler;
    }
  , handle: function(event) {
      if (this.events.hasOwnProperty(event)) {
        this.events[event]();
      }
      else {
        this.events.error();
      }
    }
};

exports.createChanneller = function(object) {
  if (object && typeof object === 'object') {
    protolib.mixin(object, channeller);
    return object;
  }
  else {
    return protolib.clone(channeller);
  }
};
