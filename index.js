/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

module.exports = function (arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('expected the first argument to be an array');
  }

  var len = arr.length;
  if (len === 0) return null;

  n = n && parseInt(n, 10) || 1;

  if (n === 1) return arr[len - 1];

  var res = new Array(n);
  while (n--) {
    res[n] = arr[--len];
  }
  return res;
}
