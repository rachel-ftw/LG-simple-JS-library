'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toArray = function toArray(input) {
  if (typeof input === 'string') {
    return input.split('');
  } else if (input instanceof Object) {
    var values = [];

    for (var key in input) {
      values.push(input[key]);
    }

    return values;
  } else {
    return [];
  }
};

exports.toArray = toArray;