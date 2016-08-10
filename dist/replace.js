"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var replace = function replace(string, pattern, replacement) {
  var resultString = string.replace(pattern, replacement);
  return resultString;
};

exports.replace = replace;