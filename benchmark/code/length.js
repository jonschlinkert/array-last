module.exports = function (arr) {
  return last(arr, 5);
};


function last(arr, n) {
  var len = arr.length;
  var res = new Array(n);
  while (n--) {
    res[n] = arr[--len];
  }
  return res;
}
