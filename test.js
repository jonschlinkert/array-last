/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var last = require('./');

describe('last', function () {
  it('should throw an error if invalid args are passed:', function (cb) {
    try {
      last();
      cb(new Error('expected an error'));
    } catch(err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected the first argument to be an array');
      cb();
    }
  });

  it('should return the last element in the array:', function () {
    assert.equal(last(['a', 'b', 'c', 'd', 'e', 'f']), 'f');
    assert.equal(last(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'f');
  });

  it('should the last n elements of the array:', function () {
    assert.deepEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f']);
  });
});

