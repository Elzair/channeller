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
      if (this.events.hasOwnProperty(event))
        this.events[event]();
      else
        this.events.error();
    }
};

exports.createChanneller = function(obj) {
  return Object.create(channeller, obj || {});
};
