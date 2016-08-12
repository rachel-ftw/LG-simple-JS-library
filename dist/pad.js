'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pad = function pad() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var chars = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

  var padsize = length - input.length;
  var result = input;
  var front = false;

  while (result.length < length) {
    if (front) {
      result = '' + chars + result;
    } else {
      result = '' + result + chars;
    }

    front = !front;

    if (result.length > length) {
      result = result.slice(0, length);
    }
  }

  return result;
};

exports.pad = pad;