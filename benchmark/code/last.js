var slice = require('array-slice');

module.exports = function (arr) {
  return last(arr, 5);
}

function last(arr, n) {
  return slice(arr, -n);
};
