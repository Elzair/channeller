var channeller = require(__dirname+'/../../');

exports.startContinuousFunction = function() {
  var intervalID = setInterval(function() {
    console.log('Hello!'); 
  }, 50);

  var ch = channeller.createChanneller();
  ch.on('stop', function() {
    clearInterval(intervalID);
  });

  return ch;
};
