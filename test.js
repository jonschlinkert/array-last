/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var last = require('./');

describe('last', function() {
  it('should throw an error if invalid arguments are passed', function() {
    assert.throws(function() {
      last();
    }, /expected/i);

    assert.throws(function() {
      last('foo');
    }, /expected/i);

    assert.throws(function() {
      last({ foo: 'bar' });
    }, /expected/i);
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
