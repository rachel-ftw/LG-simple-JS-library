"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nth = function nth(array, input) {
  var n = input > 0 ? input : array.length + input;

  return array[n];
};

exports.nth = nth;