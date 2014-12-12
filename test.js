/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var last = require('./');

describe('last', function () {
  it('should throw an error if the value passed is not an array:', function () {
    (function () {
      last();
    }).should.throw('array-last expects an array as the first argument.');
  });

  it('should return the last element in the array:', function () {
    last(['a', 'b', 'c', 'd', 'e', 'f']).should.eql('f');
    last(['a', 'b', 'c', 'd', 'e', 'f'], 1).should.eql('f');
  });

  it('should the last n elements of the array:', function () {
    last(['a', 'b', 'c', 'd', 'e', 'f'], 3).should.eql(['d', 'e', 'f']);
  });
});

