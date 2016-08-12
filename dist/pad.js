'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pad = function pad() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var chars = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

  result = '';
  //looks at length of input string
  //compares that to length
  var padsize = length - string.length;
  if (length <= string.length) {
    return string;
  } else {}
  //if padsize is even, divide by two and padd chars for that many units around string
  //if padsize is odd, subtract one, divide by two, pad both sides, add one to butt?


  //modulous with 2 and you get a remainder...
  //takes the length
  return result;
};

exports.pad = pad;