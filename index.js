/**
  * Hello,
  * May I recommend that you try this instead?
  **/

const isNumber = require('is-number');

module.exports = last(arr, n = 1) => {
  /* always ensure that 'arr' is an array */
  if (!Array.isArray(arr)) {
    throw new Error('expected the first argument to be an array');
  }
  /* n should always be a number. NaN is not allowed either! */
  else if (!isNumber(n)) {
    throw new Error('expected argument "n" to be a number');
  }
  /* n needs to be a value less than the length of the array param */
  else if (n > arr.length) {
    throw new Error('expected argument "n" to be less than or equal to array length');
  }
  /* n needs to be a value greater than zero */
  else if (n < 0) {
    throw new Error('expected argument "n" to be greater than zero');
  }
  /* if you are here, then we're ok with the rest of the details... */
  else {
    var len = arr.length;
    if (len === 0) {
      return null;
    }

    var res = new Array(n);
    while (n--) {
      res[n] = arr[--len];
    }
    return res;
  }
};
