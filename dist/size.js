"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var size = function size(input) {
  if (input instanceof Object) {
    return Object.keys(input).length;
  }
  return input.length;
};
exports.size = size;