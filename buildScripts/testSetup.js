//This file isn`t transpiled, so must use commomJS and ES5

//Register babel to transpile before our tests run.
require('babel-register') ();

// Disable webpack features that Mocha dosen`t understand
require.extensions['.css'] = function() {};
