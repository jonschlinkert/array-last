module.exports = function (arr) {
  return last(arr, 5);
};

function last(arr, n) {
  return arr.slice(-n);
}