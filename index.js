/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function last(arr) {
  if (arr == null || arr.length < 1) {
    return undefined;
  }
  return arr[arr.length - 1];
};