'use strict';

var fs = require('fs');
var path = require('path');
var bold = require('ansi-bold');
var glob = require('matched');

var fixtures = __dirname + '/fixtures';
var code = __dirname + '/code';

glob.sync('*.js', {cwd: code}).forEach(function (fp) {
  var fn = require(path.resolve(code, fp));
  var name = path.basename(fp, path.extname(fp));

  glob.sync('*.js', {cwd: fixtures}).forEach(function (fixture) {
    fixture = path.resolve(fixtures, fixture);
    var base = path.basename(fixture, path.extname(fixture));
    console.log(bold(name + ' [' + base + ']') + ':', fn.apply(fn, require(fixture)));
  });
});

// var braces = require('braces');

// function range(a, b, step) {
//   var arr = [], i = a, max = b;
//   step = step || 1;

//   while ((i = (step + i)) < max) {
//     arr.push(String(i));
//   }
//   return arr;
// };

// console.log(range(0, 1000000));
