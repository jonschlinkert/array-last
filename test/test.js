/*!
 * array-last <https://github.com/jonschlinkert/array-last>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var last = require('..');

describe('when foo is passed:', function () {
  it('should convert foo to bar.', function () {
    var arr = ['a', 'b', 'c'];
    expect(last(arr)).to.eql('c');
  });
});