"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var zip = function zip() {
  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }

  var maxLength = 0;
  var result = [];

  for (var index = 0; index < inputs.length; index++) {
    var array = inputs[index];

    if (!(array instanceof Array)) {
      return [];
    }

    if (array.length > maxLength) {
      maxLength = array.length;
    }
  }

  for (var _index = 0; _index < maxLength; _index++) {
    var baby = [];

    for (var arrayIndex = 0; arrayIndex < inputs.length; arrayIndex++) {
      baby.push(inputs[arrayIndex][_index]);
    }

    result.push(baby);
  }

  return result;
};

exports.zip = zip;