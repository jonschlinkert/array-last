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

describe('last', function() {
  it('should throw an error if no values are passed:', function(cb) {
    try {
      last();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected the first argument to be an array');
      cb();
    }
  });

  it('should throw an error if a string is passed:', function (cb) {
    try {
      last('foo');
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected the first argument to be an array');
      cb();
    }
  });

  it('should throw an error if a non-array is passed:', function (cb) {
    try {
      last({ foo: 'bar' });
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected the first argument to be an array');
      cb();
    }
  });

  it('should return the last element in the array:', function() {
    assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f']), 'f');
    assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'f');
  });

  it('should the last n elements of the array:', function() {
    assert.deepEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f']);
  });

  it('should return null if the array has no elements', function() {
    assert.strictEqual(last([]), null);
    assert.strictEqual(last([], 3), null);
  });
});

