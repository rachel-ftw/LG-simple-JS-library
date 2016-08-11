"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var zip = function zip(input) {
  if (!(input instanceof Array)) {
    return [];
  }
  var result = [];

  for (var keys in input) {
    var baby = [];
    baby.push(input[keys]);
    result.push(baby);
  }

  return result;
};

exports.zip = zip;

// Take an entry of arrays 
// Not really taking the input of multiple arrays