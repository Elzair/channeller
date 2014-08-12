var callee = require(__dirname + '/callee');

var channeller = callee.startContinuousFunction();

setTimeout(function() {
  channeller.handle('stop');
  console.log('Callee stopped!');
}, 300);
