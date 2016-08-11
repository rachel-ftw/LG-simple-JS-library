"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toString = function toString(intake) {
  var output = "";

  if (intake === undefined) {
    return output;
  } else if (intake === null) {
    return output;
  } else {
    return output += intake;
  }
};

exports.toString = toString;