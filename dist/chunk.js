"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chunk = function chunk(input) {
  var chunkSize = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (!(input instanceof Array)) {
    return [];
  }

  var result = [];

  for (var i = 0; i < input.length; i += chunkSize) {
    var baby = [];

    for (var j = 0; j < chunkSize && i + j < input.length; j++) {
      baby.push(input[i + j]);
    }

    result.push(baby);
  }

  return result;
};

exports.chunk = chunk;