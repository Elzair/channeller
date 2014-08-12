Channeller
==========

**Channeller** is a simple Javascript library for handling events across multiple objects and/or modules.

Installation
------------

To install **Channeller** into your project, `cd` to the top-level directory of your project and enter the following command into your console.

    npm install channeller --save

Use
---

The following example shows how to use **Channeller** to handle events across multiple modules. You can find the two files and run the example in the directory *examples/multi-module*.

The first file, *callee.js*, defines the function to be called.

```javascript
var channeller = require(__dirname+'/../../'); // Require channeller library

exports.startContinuousFunction = function() {
  // Create function that continuously runs
  var intervalID = setInterval(function() {
    console.log('Hello!'); 
  }, 50);

  // Create channeller and tell it to stop the function when it handles the 'stop' event
  var ch = channeller.createChanneller();
  ch.on('stop', function() {
    clearInterval(intervalID);
  });

  // Return the channeller object so the caller can make use of it
  return ch;
};
```

The second file, *caller.js*, defines the code that calls `callee.startContinuousFunction`.

```javascript
var callee = require(__dirname + '/callee');

var channeller = callee.startContinuousFunction();

setTimeout(function() {
  channeller.handle('stop');
  console.log('Callee stopped!');
}, 300);
```

Now, run the example `node caller.js` and you should see the following output.

    Hello!
    Hello!
    Hello!
    Hello!
    Callee stopped!
