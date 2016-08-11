'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toArray = function toArray(input) {
  var result = [];
  if (input instanceof String) {
    return input.split('');
  } else if (input instanceof Object) {
    return input.values();
  } else {
    return [];
  }
};

exports.toArray = toArray;