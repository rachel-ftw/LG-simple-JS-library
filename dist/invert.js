"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var invert = function invert(object) {
  var result = {};

  for (var key in object) {
    result[object[key]] = key;
  }

  return result;
};

exports.invert = invert;