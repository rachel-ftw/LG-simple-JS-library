"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nth = function nth(array, input) {
  var n = Math.abs(input);
  if (input >= 0) {
    return array[n];
  } else if (input < 0) {
    return array[array.length - (n + 1)];
  }
};

exports.nth = nth;