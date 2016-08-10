"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(input) {
  var total = input[0];

  for (var index = 1; index < input.length; index++) {
    total += input[index];
  }

  return total;
};

exports.sum = sum;