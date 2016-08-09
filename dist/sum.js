"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indentity = function indentity(value) {
  return value;
};

var baseSum = function baseSum(array, iteratee) {
  var result = void 0;
  var index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
};

var sum = function sum(input) {
  return input && input.length ? baseSum(input, identity) : 0;
};

exports.sum = sum;