/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var isNumber = require('is-number');
var slice = require('array-slice');

module.exports = function last(arr, num) {
  if (!Array.isArray(arr)) {
    throw new Error('array-last expects an array as the first argument.');
  }

  if (arr.length === 0) {
    return null;
  }

  var res = slice(arr, arr.length - (isNumber(num) ? +num : 1));
  if (+num === 1 || num == null) {
    return res[0];
  }
  return res;
};
