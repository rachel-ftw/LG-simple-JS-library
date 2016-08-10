"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var multiply = function multiply(num1, num2) {
  var value_one = num1 === undefined ? 1 : num1;
  var value_two = num2 === undefined ? 1 : num2;

  return value_one * value_two;
};

exports.multiply = multiply;