'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var slice = function slice(input) {
  var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var end = arguments[2];

  if (!(input instanceof Array || typeof input === 'string')) {
    return [];
  }

  var result = [];

  for (var i = start; i < (end || input.length); i++) {
    result.push(input[i]);
  }

  return result;
};

exports.slice = slice;